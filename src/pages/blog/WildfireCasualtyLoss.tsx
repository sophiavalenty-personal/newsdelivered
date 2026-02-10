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

const WildfireCasualtyLoss = () => {
  return (
    <BlogLayout title="Wildfire Casualty Losses: What LA-Area Homeowners Should Know After Recent Fires">
      <p style={paragraph}>
        The recent wildfires in and around Los Angeles have caused devastating losses for many families. Beyond the immediate impact, homeowners are often left asking an important question:
      </p>
      <p style={{ ...paragraph, fontStyle: 'italic' }}>
        "Is any of this deductible on my taxes?"
      </p>
      <p style={paragraph}>
        In some cases, the answer is yes — but the rules are specific.
      </p>

      <h2 style={sectionHeading}>What Is a Personal Casualty Loss?</h2>
      <p style={paragraph}>
        A personal casualty loss is damage or destruction of property caused by a sudden, unexpected event — such as a wildfire.
      </p>
      <p style={paragraph}>
        Under current tax law, wildfire losses may be deductible only if the fire occurred in a federally declared disaster area.
      </p>
      <p style={paragraph}>
        Many of the recent LA-area wildfires fall into this category, but eligibility depends on the specific declaration and timing.
      </p>

      <h2 style={sectionHeading}>What Types of Losses May Qualify?</h2>
      <p style={paragraph}>Potentially deductible losses can include:</p>
      <ul style={list}>
        <li style={listItem}>Damage to your primary residence</li>
        <li style={listItem}>Damage to personal property inside the home</li>
        <li style={listItem}>Certain out-of-pocket expenses not reimbursed by insurance</li>
      </ul>
      <p style={paragraph}>
        However, insurance reimbursements must be accounted for, and not all losses qualify.
      </p>

      <h2 style={sectionHeading}>How the IRS Calculates the Deduction</h2>
      <p style={paragraph}>The IRS uses a multi-step calculation that considers:</p>
      <ul style={list}>
        <li style={listItem}>The decrease in the property's value</li>
        <li style={listItem}>Your adjusted basis</li>
        <li style={listItem}>Insurance proceeds</li>
        <li style={listItem}>A per-event reduction</li>
        <li style={listItem}>A percentage of your adjusted gross income</li>
      </ul>
      <p style={paragraph}>
        Because of these thresholds, the deduction can be meaningful for some taxpayers — and limited for others.
      </p>

      <h2 style={sectionHeading}>Documentation Is Critical</h2>
      <p style={paragraph}>If you may be eligible, strong documentation is essential:</p>
      <ul style={list}>
        <li style={listItem}>Insurance claims and settlement statements</li>
        <li style={listItem}>Photos of damage</li>
        <li style={listItem}>Repair estimates or appraisals</li>
        <li style={listItem}>Receipts for cleanup or temporary housing</li>
      </ul>
      <p style={paragraph}>
        Having this organized early makes the tax process much smoother.
      </p>

      <h2 style={sectionHeading}>Special Relief Provisions</h2>
      <p style={paragraph}>In some disaster situations, taxpayers may:</p>
      <ul style={list}>
        <li style={listItem}>Claim the loss on a prior-year return</li>
        <li style={listItem}>Benefit from extended filing deadlines</li>
        <li style={listItem}>Qualify for state-level relief in addition to federal rules</li>
      </ul>

      <h2 style={sectionHeading}>How a CPA Can Help During Recovery</h2>
      <p style={paragraph}>
        In the aftermath of a wildfire, taxes are rarely the first thing on anyone's mind — and that's understandable.
      </p>
      <p style={paragraph}>A CPA can help you:</p>
      <ul style={list}>
        <li style={listItem}>Determine whether a casualty loss deduction applies</li>
        <li style={listItem}>Calculate the loss correctly</li>
        <li style={listItem}>Coordinate insurance and tax reporting</li>
        <li style={listItem}>Avoid issues later if the IRS asks questions</li>
      </ul>
      <p style={paragraph}>
        At Harik Thompson CPAs, our goal is to help clients navigate this process with clarity and care, so tax issues don't add stress during an already difficult time.
      </p>

      <h2 style={sectionHeading}>Moving Forward</h2>
      <p style={paragraph}>
        If your home or property was affected by the recent LA wildfires, it may be worth reviewing your situation — even if you're unsure whether you qualify.
      </p>
      <p style={paragraph}>
        A brief review can help you understand your options and make informed decisions as you rebuild.
      </p>
    </BlogLayout>
  );
};

export default WildfireCasualtyLoss;
