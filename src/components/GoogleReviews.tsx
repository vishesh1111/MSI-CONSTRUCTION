'use client';

import React from 'react';
import styles from './GoogleReviews.module.css';

const reviews = [
  {
    name: 'Vishesh Verma',
    rating: 5,
    text: 'Best constructions programs offered for customers.',
    time: '3 years ago',
  },
  {
    name: 'Ayesha Salman Saifi',
    rating: 5,
    text: 'Fully transparency in material this is good and the thing is they done work on time.',
    time: '1 month ago',
  },
  {
    name: 'Uvaish Alam',
    rating: 5,
    text: 'Very good experience specially at structure & interior work.',
    time: '2 months ago',
    isLocalGuide: true,
  },

  {
    name: 'Rahul Sharma',
    rating: 5,
    text: 'Great experience with MSI Construction. They handled our commercial project very professionally. Highly recommended.',
    time: '8 months ago',
  },
  {
    name: 'Aamir Hussain',
    rating: 5,
    text: 'Outstanding work in residential construction. The quality of finishing is top-notch. Will definitely work with them again.',
    time: '5 months ago',
  },
  {
    name: 'Farhan Ahmed',
    rating: 4,
    text: 'Good construction company with reasonable pricing. They delivered our project on time with good quality materials.',
    time: '1 year ago',
  },
  {
    name: 'Vikram Singh',
    rating: 5,
    text: 'Professional team and great quality of work. Highly satisfied with their construction services.',
    time: '10 months ago',
  },
  {
    name: 'Neha Gupta',
    rating: 5,
    text: 'MSI Construction delivered our home renovation on time. Excellent interior design and execution.',
    time: '11 months ago',
  },
];

const ReviewCard = ({ review, isDuplicate = false }: { review: any; isDuplicate?: boolean }) => (
  <div className={`${styles.card} ${isDuplicate ? styles.duplicate : ''}`}>
    <div className={styles.header}>
      <div className={styles.avatar}>
        {review.name.charAt(0)}
      </div>
      <div className={styles.headerInfo}>
        <h3 className={styles.reviewerName}>{review.name}</h3>
        <div className={styles.googleBadge}>
          {'isLocalGuide' in review && review.isLocalGuide ? 'Local Guide · ' : ''}Google Review
        </div>
      </div>
    </div>
    <div className={styles.starsRow}>
      <div className={styles.stars}>
        {'★'.repeat(review.rating)}
        {'☆'.repeat(5 - review.rating)}
      </div>
      <span className={styles.timeAgo}>{review.time}</span>
    </div>
    <p className={styles.content}>&ldquo;{review.text}&rdquo;</p>
  </div>
);

export default function GoogleReviews() {
  return (
    <section className={styles.reviewsSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Client Testimonials</h2>
        <p className={styles.subtitle}>What our clients say about us on Google</p>

        <div className={styles.summaryContainer}>
          <div className={styles.ratingNumber}>4.9</div>
          <div className={styles.summaryDetails}>
            <div className={styles.starsSummary}>
              {'★'.repeat(5)}
            </div>
            <div className={styles.reviewCount}>Based on 38 reviews</div>
          </div>
          <a
            href="https://google.com/maps/place/MSI+CONSTRUCTION/@28.589581,76.993804,1015m/data=!3m1!1e3!4m16!1m9!3m8!1s0x390d056fe43ce035:0x6e808a308c855eb5!2sMSI+CONSTRUCTION!8m2!3d28.589581!4d76.993804!9m1!1b1!16s%2Fg%2F11trdjgfl5!3m5!1s0x390d056fe43ce035:0x6e808a308c855eb5!8m2!3d28.589581!4d76.993804!16s%2Fg%2F11trdjgfl5?entry=ttu&g_ep=EgoyMDI2MDcyOS4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.googleLink}
          >
            View all reviews on Google
          </a>
        </div>

        <div className={styles.carouselWrapper}>
          <div className={styles.track}>
            {reviews.map((review, idx) => (
              <ReviewCard key={`orig-${idx}`} review={review} />
            ))}
            {reviews.map((review, idx) => (
              <ReviewCard key={`dup-${idx}`} review={review} isDuplicate={true} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
