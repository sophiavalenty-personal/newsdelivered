import React from 'react';
import { useNavigate } from 'react-router-dom';

interface BlogLayoutProps {
  title: string;
  children: React.ReactNode;
}

const BlogLayout: React.FC<BlogLayoutProps> = ({ title, children }) => {
  const navigate = useNavigate();

  const handleBack = (e: React.MouseEvent) => {
    e.preventDefault();
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate('/example/harikthompsoncpas');
    }
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#ffffff', fontFamily: 'Georgia, Times, serif' }}>
      {/* Header */}
      <header style={{ backgroundColor: '#ffffff', borderBottom: '3px solid #1a4a6e', padding: '20px 0', textAlign: 'center' }}>
        <a href="/example/harikthompsoncpas" onClick={handleBack}>
          <img
            src="/images/ht-logo-stacked-sm.jpg"
            alt="Harik Thompson CPAs"
            style={{ maxWidth: '200px', display: 'block', margin: '0 auto', cursor: 'pointer' }}
          />
        </a>
      </header>

      {/* Nav bar */}
      <nav style={{ backgroundColor: '#1a4a6e', padding: '12px 40px', textAlign: 'center' }}>
        <a href="/example/harikthompsoncpas" onClick={handleBack} style={{ color: '#ffffff', textDecoration: 'none', fontSize: '13px', fontFamily: 'Arial, sans-serif', letterSpacing: '1px', textTransform: 'uppercase', cursor: 'pointer' }}>
          ← Back to Harik Thompson CPAs
        </a>
      </nav>

      {/* Article */}
      <main style={{ maxWidth: '720px', margin: '0 auto', padding: '50px 24px 80px' }}>
        <h1 style={{
          color: '#1a4a6e',
          fontSize: '32px',
          fontWeight: 'bold',
          lineHeight: '1.3',
          marginBottom: '30px',
          borderBottom: '3px solid #86C733',
          paddingBottom: '20px',
        }}>
          {title}
        </h1>

        <article style={{
          color: '#2d3748',
          fontSize: '16px',
          lineHeight: '1.8',
        }}>
          {children}
        </article>

        {/* CTA */}
        <div style={{
          backgroundColor: '#1a4a6e',
          padding: '40px',
          textAlign: 'center',
          marginTop: '50px',
          borderRadius: '6px',
        }}>
          <p style={{ color: '#ffffff', fontSize: '18px', marginBottom: '20px', fontFamily: 'Georgia, Times, serif' }}>
            Have questions? We're here to help.
          </p>
          <a
            href="https://www.harikthompsoncpas.com/contact.html"
            style={{
              backgroundColor: '#86C733',
              color: '#1a4a6e',
              padding: '14px 32px',
              fontSize: '16px',
              fontWeight: 'bold',
              textDecoration: 'none',
              borderRadius: '5px',
              display: 'inline-block',
              fontFamily: 'Arial, sans-serif',
            }}
          >
            Book a Consultation →
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer style={{
        backgroundColor: '#1a4a6e',
        padding: '24px 40px',
        textAlign: 'center',
      }}>
        <p style={{ color: '#ffffff', fontSize: '12px', margin: 0, fontFamily: 'Arial, sans-serif', opacity: 0.7 }}>
          © {new Date().getFullYear()} Harik Thompson CPAs and Advisors. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default BlogLayout;
