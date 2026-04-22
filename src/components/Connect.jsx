import React from 'react';
import './Connect.css';

const Connect = () => {
  return (
    <section id="connect" className="connect-section">
      <div className="container">
        <div className="connect-header">
          <span className="connect-label">Connect</span>
          <h2 className="connect-title">Join Our Community</h2>
          <p className="connect-card-description-white">
                Ready to start your Korean journey? Join our free online course today.
              </p>
        </div>

        <div className="connect-grid-social">
          {/* WhatsApp Channel Card */}
          <div className="connect-card">
            <div className="connect-card-content">
              <div className="connect-icon-large-wrapper">
                <i className="fab fa-whatsapp connect-icon-brand connect-icon-whatsapp"></i>
              </div>
              <h3 className="connect-card-title">WhatsApp Channel</h3>
              <p className="connect-card-description">
                Join our WhatsApp channel to stay connected with fellow students, receive updates, and participate in discussions.
              </p>
              <div className="connect-link-wrapper">
                <a 
                  href="https://whatsapp.com/channel/0029VbB4ZqBIHphF3E9XW90a" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="connect-social-link connect-social-link-whatsapp"
                >
                  <i className="fab fa-whatsapp"></i>
                  <span>Go to WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Facebook Card */}
          <div className="connect-card">
            <div className="connect-card-content">
              <div className="connect-icon-large-wrapper">
                <i className="fab fa-facebook connect-icon-brand connect-icon-facebook"></i>
              </div>
              <h3 className="connect-card-title">Facebook Group</h3>
              <p className="connect-card-description">
                Join our Facebook group for daily inspiration, Korean content, course updates, and stories from our community.
              </p>
              <div className="connect-link-wrapper">
                <a 
                  href="https://www.facebook.com/groups/1074699934136643" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="connect-social-link connect-social-link-facebook"
                >
                  <i className="fab fa-facebook"></i>
                  <span>Go to Facebook</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="connect-grid">
        </div>
      </div>
    </section>
  );
};

export default Connect;

