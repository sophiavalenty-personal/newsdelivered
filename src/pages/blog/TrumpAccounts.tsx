import React from 'react';
import BlogLayout from '@/components/blog/BlogLayout';

const sectionHeading: React.CSSProperties = {
  color: '#1a4a6e',
  fontSize: '22px',
  fontWeight: 'bold',
  marginTop: '40px',
  marginBottom: '16px',
};

const paragraph: React.CSSProperties = {
  marginBottom: '16px',
};

const list: React.CSSProperties = {
  paddingLeft: '24px',
  marginBottom: '16px',
};

const listItem: React.CSSProperties = {
  marginBottom: '8px',
};

const TrumpAccounts = () => {
  return (
    <BlogLayout title="Trump Accounts: A Simple Guide for Parents and Families Considering One">
      <p style={paragraph}>
        If you've recently heard about Trump Accounts and wondered whether your child or family might benefit, you're not alone. We've been getting a lot of questions from parents and grandparents who want to understand what these accounts are — and whether starting one actually makes sense.
      </p>
      <p style={paragraph}>Let's walk through it together.</p>

      <h2 style={sectionHeading}>What Is a Trump Account?</h2>
      <p style={paragraph}>
        A Trump Account is a new, tax-advantaged savings account designed for children, with the goal of helping the next generation start building wealth earlier in life.
      </p>
      <p style={paragraph}>In simple terms, it's a long-term investment account:</p>
      <ul style={list}>
        <li style={listItem}>Opened for a child under age 18</li>
        <li style={listItem}>Designed to grow over many years</li>
        <li style={listItem}>Invested in broad U.S. equity index funds</li>
        <li style={listItem}>Not accessible until adulthood</li>
      </ul>
      <p style={paragraph}>
        For certain children born in specific years, the federal government also provides a starter contribution, giving the account an immediate head start.
      </p>

      <h2 style={sectionHeading}>Who Might Be Eligible?</h2>
      <p style={paragraph}>A Trump Account may be an option if:</p>
      <ul style={list}>
        <li style={listItem}>You have a child or grandchild under 18</li>
        <li style={listItem}>The child has a valid Social Security number</li>
        <li style={listItem}>You're interested in long-term saving rather than short-term access</li>
      </ul>
      <p style={paragraph}>
        Children born between 2025 and 2028 may also qualify for a one-time government contribution, if the account is properly established.
      </p>
      <p style={paragraph}>
        Even without the initial contribution, families can still open and fund these accounts for eligible minors.
      </p>

      <h2 style={sectionHeading}>How the Account Grows</h2>
      <p style={paragraph}>Trump Accounts are designed with long-term growth in mind.</p>
      <ul style={list}>
        <li style={listItem}>Contributions are invested in diversified U.S. stock market funds</li>
        <li style={listItem}>Earnings grow without being taxed year after year</li>
        <li style={listItem}>The account is locked until the child turns 18</li>
      </ul>
      <p style={paragraph}>
        Because the time horizon is long, even modest contributions made early can compound significantly over time.
      </p>

      <h2 style={sectionHeading}>How Is This Different From Other Savings Options?</h2>
      <p style={paragraph}>
        Families often ask how Trump Accounts compare to other common tools like 529 plans or custodial accounts.
      </p>
      <p style={paragraph}>Each option serves a different purpose:</p>
      <ul style={list}>
        <li style={listItem}>529 plans are primarily for education</li>
        <li style={listItem}>Custodial accounts (UTMA/UGMA) offer flexibility but limited tax advantages</li>
        <li style={listItem}>Trump Accounts are focused on early, tax-advantaged investing for adulthood</li>
      </ul>
      <p style={paragraph}>
        In many cases, a Trump Account works best alongside other savings strategies rather than replacing them.
      </p>

      <h2 style={sectionHeading}>Is Starting One Always the Right Move?</h2>
      <p style={paragraph}>Not necessarily — and that's an important point.</p>
      <p style={paragraph}>A Trump Account may be worth considering if:</p>
      <ul style={list}>
        <li style={listItem}>You're already on solid financial footing</li>
        <li style={listItem}>You want to prioritize long-term wealth building</li>
        <li style={listItem}>You're comfortable with funds being unavailable until adulthood</li>
      </ul>
      <p style={paragraph}>It may not be the best fit if:</p>
      <ul style={list}>
        <li style={listItem}>You expect to need the money sooner</li>
        <li style={listItem}>You're still working through higher-interest debt</li>
        <li style={listItem}>Education-specific savings is your primary goal</li>
      </ul>
      <p style={paragraph}>This is where personalized planning really matters.</p>

      <h2 style={sectionHeading}>How a CPA Can Help</h2>
      <p style={paragraph}>
        Because Trump Accounts are new, the rules and guidance are still evolving. A CPA can help you:
      </p>
      <ul style={list}>
        <li style={listItem}>Confirm eligibility</li>
        <li style={listItem}>Coordinate contributions with your overall tax plan</li>
        <li style={listItem}>Decide how this fits with other savings vehicles</li>
        <li style={listItem}>Avoid overfunding or misalignment with your goals</li>
      </ul>
      <p style={paragraph}>
        Starting an account is easy. Starting the <em>right</em> account, for the right reasons, at the right time is where professional guidance adds value.
      </p>

      <h2 style={sectionHeading}>A Thoughtful First Step</h2>
      <p style={paragraph}>
        If you're considering a Trump Account, the best next step is a simple conversation. We can look at your broader financial picture and help you decide whether this account supports your long-term goals — or whether another strategy might serve you better.
      </p>
      <p style={paragraph}>
        At Harik Thompson CPAs, our role is to help families make informed, confident decisions — especially when new financial tools enter the picture.
      </p>
      <p style={{ ...paragraph, fontWeight: 'bold' }}>
        If you'd like help evaluating whether a Trump Account makes sense for your family, we're happy to guide you.
      </p>
    </BlogLayout>
  );
};

export default TrumpAccounts;
