"use client";

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import styles from './AdminDashboard.module.css';

interface Inquiry {
  id: string | number;
  source: 'inquiry_modal' | 'contact_form' | string;
  full_name: string;
  email: string;
  phone: string;
  project_type: string;
  location: string;
  message: string;
  status: 'new' | 'contacted' | 'in_progress' | 'closed';
  created_at: string;
  updated_at: string;
}

interface Stats {
  total: number;
  new_count: number;
  contacted_count: number;
  in_progress_count: number;
  closed_count: number;
  today_count: number;
}

export default function AdminDashboard() {
  const router = useRouter();
  const [token, setToken] = useState<string | null>(null);
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);
  
  // Filters
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [sourceFilter, setSourceFilter] = useState('All');

  const fetchDashboardData = useCallback(async (authToken: string, isSilent = false) => {
    if (!isSilent) setLoading(true);
    try {
      const res = await fetch('/api/inquiries', {
        headers: {
          'Authorization': `Bearer ${authToken}`
        }
      });

      if (res.status === 401) {
        localStorage.removeItem('msi_admin_token');
        router.push('/admin/login');
        return;
      }

      if (res.ok) {
        const data = await res.json();
        setInquiries(data.inquiries || []);
        setStats(data.stats || null);
      }
    } catch (err) {
      console.error('Failed to fetch data:', err);
    } finally {
      if (!isSilent) setLoading(false);
    }
  }, [router]);

  useEffect(() => {
    const storedToken = localStorage.getItem('msi_admin_token');
    if (!storedToken) {
      router.push('/admin/login');
      return;
    }
    setToken(storedToken);
    fetchDashboardData(storedToken);

    const interval = setInterval(() => {
      fetchDashboardData(storedToken, true);
    }, 30000);

    return () => clearInterval(interval);
  }, [fetchDashboardData, router]);

  const handleLogout = () => {
    localStorage.removeItem('msi_admin_token');
    router.push('/admin/login');
  };

  const handleStatusChange = async (id: string | number, newStatus: string) => {
    if (!token) return;
    try {
      const res = await fetch(`/api/inquiries/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ status: newStatus })
      });
      if (res.ok) {
        fetchDashboardData(token, true);
      }
    } catch (err) {
      console.error('Failed to update status', err);
    }
  };

  const handleDelete = async (id: string | number) => {
    if (!token) return;
    if (!window.confirm('Are you sure you want to delete this inquiry?')) return;
    
    try {
      const res = await fetch(`/api/inquiries/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      if (res.ok) {
        fetchDashboardData(token, true);
      }
    } catch (err) {
      console.error('Failed to delete inquiry', err);
    }
  };

  const handleInitDb = async () => {
    if (!token) return;
    try {
      const res = await fetch('/api/init-db', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      if (res.ok) {
        alert('Database initialized successfully');
        fetchDashboardData(token, true);
      } else {
        alert('Failed to initialize database');
      }
    } catch (err) {
      alert('Error initializing database');
    }
  };

  const exportCSV = () => {
    if (inquiries.length === 0) return;
    
    const headers = ['ID', 'Date', 'Source', 'Name', 'Email', 'Phone', 'Type', 'Location', 'Status', 'Message'];
    const csvContent = [
      headers.join(','),
      ...inquiries.map(i => [
        i.id,
        new Date(i.created_at).toLocaleDateString(),
        i.source,
        `"${i.full_name.replace(/"/g, '""')}"`,
        i.email,
        i.phone,
        `"${(i.project_type || '').replace(/"/g, '""')}"`,
        `"${(i.location || '').replace(/"/g, '""')}"`,
        i.status,
        `"${(i.message || '').replace(/"/g, '""')}"`
      ].join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `msi_inquiries_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const getStatusClass = (status: string) => {
    switch(status) {
      case 'new': return styles.statusNew;
      case 'contacted': return styles.statusContacted;
      case 'in_progress': return styles.statusInProgress;
      case 'closed': return styles.statusClosed;
      default: return styles.statusClosed;
    }
  };

  const formatSource = (source: string) => {
    return source === 'inquiry_modal' ? 'Inquiry Modal' : 
           source === 'contact_form' ? 'Contact Form' : source;
  };

  const filteredInquiries = inquiries.filter(inq => {
    const matchesSearch = inq.full_name.toLowerCase().includes(search.toLowerCase()) || 
                          inq.email.toLowerCase().includes(search.toLowerCase()) ||
                          inq.phone.includes(search);
    
    const matchesStatus = statusFilter === 'All' || 
                         (statusFilter === 'New' && inq.status === 'new') ||
                         (statusFilter === 'Contacted' && inq.status === 'contacted') ||
                         (statusFilter === 'In Progress' && inq.status === 'in_progress') ||
                         (statusFilter === 'Closed' && inq.status === 'closed');
                         
    const matchesSource = sourceFilter === 'All' ||
                         (sourceFilter === 'Inquiry Modal' && inq.source === 'inquiry_modal') ||
                         (sourceFilter === 'Contact Form' && inq.source === 'contact_form');

    return matchesSearch && matchesStatus && matchesSource;
  });

  if (loading) {
    return (
      <div className={styles.container}>
        <div className={styles.loadingState}>
          <div className={styles.spinner}></div>
          <p>Loading Dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.brand}>
          <span className={styles.brandName}>MSI Construction</span>
          <h1 className={styles.pageTitle}>Admin Dashboard</h1>
        </div>
        <div className={styles.headerRight}>
          <button onClick={handleInitDb} className={styles.initDbBtn}>Initialize DB</button>
          <button onClick={handleLogout} className={styles.logoutBtn}>Logout</button>
        </div>
      </header>

      <main className={styles.content}>
        <div className={styles.statsRow}>
          <div className={styles.statCard}>
            <div className={styles.statTitle}>Total Inquiries</div>
            <div className={styles.statValue}>{stats?.total || 0}</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statTitle}>New Today</div>
            <div className={styles.statValue}>{stats?.today_count || 0}</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statTitle}>Pending (New)</div>
            <div className={styles.statValue}>{stats?.new_count || 0}</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statTitle}>Contacted</div>
            <div className={styles.statValue}>{stats?.contacted_count || 0}</div>
          </div>
        </div>

        <div className={styles.controlsRow}>
          <div className={styles.filters}>
            <input 
              type="text" 
              placeholder="Search name, email, or phone..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className={styles.searchInput}
            />
            <select 
              value={statusFilter} 
              onChange={(e) => setStatusFilter(e.target.value)}
              className={styles.select}
            >
              <option value="All">All Statuses</option>
              <option value="New">New</option>
              <option value="Contacted">Contacted</option>
              <option value="In Progress">In Progress</option>
              <option value="Closed">Closed</option>
            </select>
            <select 
              value={sourceFilter} 
              onChange={(e) => setSourceFilter(e.target.value)}
              className={styles.select}
            >
              <option value="All">All Sources</option>
              <option value="Inquiry Modal">Inquiry Modal</option>
              <option value="Contact Form">Contact Form</option>
            </select>
          </div>
          <button onClick={exportCSV} className={styles.exportBtn}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            Export CSV
          </button>
        </div>

        <div className={styles.tableContainer}>
          {filteredInquiries.length > 0 ? (
            <table className={styles.table}>
              <thead>
                <tr>
                  <th className={styles.th}>Date</th>
                  <th className={styles.th}>Name</th>
                  <th className={styles.th}>Contact Info</th>
                  <th className={styles.th}>Project</th>
                  <th className={styles.th}>Source</th>
                  <th className={styles.th}>Message</th>
                  <th className={styles.th}>Status</th>
                  <th className={styles.th}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredInquiries.map((inq) => (
                  <tr key={inq.id} className={styles.tr}>
                    <td className={styles.td}>{formatDate(inq.created_at)}</td>
                    <td className={styles.td}><strong>{inq.full_name}</strong></td>
                    <td className={styles.td}>
                      <div>{inq.email}</div>
                      <div style={{ color: 'var(--text-secondary)', fontSize: '0.75rem', marginTop: '0.25rem' }}>{inq.phone}</div>
                    </td>
                    <td className={styles.td}>
                      <div>{inq.project_type || 'N/A'}</div>
                      <div style={{ color: 'var(--text-secondary)', fontSize: '0.75rem', marginTop: '0.25rem' }}>{inq.location}</div>
                    </td>
                    <td className={styles.td}>
                      <span className={styles.sourceLabel}>{formatSource(inq.source)}</span>
                    </td>
                    <td className={styles.td}>
                      <div className={styles.messageCell} title={inq.message}>
                        {inq.message?.length > 50 ? inq.message.substring(0, 50) + '...' : inq.message || '-'}
                      </div>
                    </td>
                    <td className={styles.td}>
                      <span className={`${styles.statusBadge} ${getStatusClass(inq.status)}`}>
                        {inq.status.replace('_', ' ')}
                      </span>
                    </td>
                    <td className={styles.td}>
                      <div className={styles.actions}>
                        <select 
                          value={inq.status}
                          onChange={(e) => handleStatusChange(inq.id, e.target.value)}
                          className={styles.statusSelect}
                        >
                          <option value="new">New</option>
                          <option value="contacted">Contacted</option>
                          <option value="in_progress">In Progress</option>
                          <option value="closed">Closed</option>
                        </select>
                        <button onClick={() => handleDelete(inq.id)} className={styles.deleteBtn} title="Delete">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="3 6 5 6 21 6"></polyline>
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className={styles.emptyState}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" style={{ margin: '0 auto 1rem', opacity: 0.5 }}>
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="9" y1="3" x2="9" y2="21"></line>
              </svg>
              <h3>No inquiries found</h3>
              <p>Try adjusting your filters or search term.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
