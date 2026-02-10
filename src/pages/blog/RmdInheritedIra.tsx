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

const RmdInheritedIra = () => {
  return (
    <BlogLayout title="RMDs on IRAs: A Plain-English Guide to Required Minimum Distributions">
      <p style={paragraph}>
        If you have an IRA — or you've recently inherited one — you may have heard the term RMD, short for Required Minimum Distribution. For many people, RMDs are one of those things they know they need to deal with... but aren't quite sure when or how.
      </p>
      <p style={paragraph}>Let's break it down simply.</p>

      <h2 style={sectionHeading}>What Is an RMD?</h2>
      <p style={paragraph}>
        An RMD is the minimum amount the IRS requires you to withdraw each year from certain retirement accounts once you reach a specific age.
      </p>
      <p style={paragraph}>
        The idea is straightforward: IRAs and other retirement accounts receive tax benefits while the money is growing, but eventually the IRS requires those funds to start coming out — and being taxed.
      </p>

      <h2 style={sectionHeading}>When Do RMDs Start?</h2>
      <p style={paragraph}>
        For traditional IRAs, RMDs generally begin when you reach age 73 (for most current retirees and near-retirees).
      </p>
      <p style={paragraph}>Once they start:</p>
      <ul style={list}>
        <li style={listItem}>You must take an RMD every year</li>
        <li style={listItem}>Missing or under-withdrawing can result in significant penalties</li>
        <li style={listItem}>RMDs are typically taxed as ordinary income</li>
      </ul>
      <p style={paragraph}>
        Roth IRAs are different — original owners are not required to take RMDs during their lifetime.
      </p>

      <h2 style={sectionHeading}>How Is the RMD Amount Calculated?</h2>
      <p style={paragraph}>Your RMD is based on:</p>
      <ul style={list}>
        <li style={listItem}>Your IRA balance as of December 31 of the prior year</li>
        <li style={listItem}>Your age</li>
        <li style={listItem}>An IRS life-expectancy table</li>
      </ul>
      <p style={paragraph}>
        As you get older, the required percentage gradually increases.
      </p>
      <p style={paragraph}>
        While the calculation itself isn't complicated, coordinating RMDs with your broader tax picture often is.
      </p>

      <h2 style={sectionHeading}>What About Inherited IRAs?</h2>
      <p style={paragraph}>
        Inherited IRAs follow a different set of rules, especially after recent law changes.
      </p>
      <p style={paragraph}>Depending on your situation:</p>
      <ul style={list}>
        <li style={listItem}>You may need to withdraw the entire account within 10 years</li>
        <li style={listItem}>You may be required to take annual distributions</li>
        <li style={listItem}>The tax impact can vary widely</li>
      </ul>
      <p style={paragraph}>
        This is one of the most common areas where well-intentioned people make costly mistakes.
      </p>

      <h2 style={sectionHeading}>Why RMD Planning Matters</h2>
      <p style={paragraph}>RMDs don't exist in isolation. They can affect:</p>
      <ul style={list}>
        <li style={listItem}>Your tax bracket</li>
        <li style={listItem}>Social Security taxation</li>
        <li style={listItem}>Medicare premiums</li>
        <li style={listItem}>Overall cash flow in retirement</li>
      </ul>

      <h2 style={sectionHeading}>A Thoughtful Approach Goes a Long Way</h2>
      <p style={paragraph}>
        RMDs are mandatory — but how you handle them makes a big difference.
      </p>
      <p style={paragraph}>At Harik Thompson CPAs, we help clients:</p>
      <ul style={list}>
        <li style={listItem}>Confirm correct RMD amounts</li>
        <li style={listItem}>Avoid penalties</li>
        <li style={listItem}>Reduce unnecessary tax exposure</li>
        <li style={listItem}>Coordinate distributions with long-term goals</li>
      </ul>
      <p style={paragraph}>
        If you're approaching RMD age or have questions about an inherited IRA, a short conversation now can prevent expensive surprises later.
      </p>
    </BlogLayout>
  );
};

export default RmdInheritedIra;
