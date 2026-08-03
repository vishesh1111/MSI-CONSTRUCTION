"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './AdminLogin.module.css';

export default function AdminLogin() {
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });

      const data = await res.json();

      if (res.ok && data.success && data.token) {
        localStorage.setItem('msi_admin_token', data.token);
        router.push('/admin/dashboard');
      } else {
        setError(data.error || 'Invalid password');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className={styles.container}>
      <div className={styles.card}>
        <div className={styles.brand}>MSI Construction</div>
        <h1 className={styles.title}>Admin Access</h1>
        
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <input
              type="password"
              className={styles.input}
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              disabled={isLoading}
            />
          </div>
          
          <button type="submit" className={styles.submitBtn} disabled={isLoading || !password}>
            {isLoading ? 'Verifying...' : 'Access Dashboard'}
          </button>
          
          {error && <div className={styles.error}>{error}</div>}
        </form>
      </div>
    </main>
  );
}
