import { useState, useCallback, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Monitor, Smartphone, Expand, Grid, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

// Demo data structure - will be populated per client
interface NewsletterSample {
  id: string;
  title: string;
  description: string;
  htmlContent: string;
  thumbnail?: string;
}

interface ClientDemo {
  clientName: string;
  brandColor?: string;
  newsletters: NewsletterSample[];
}

// Placeholder data - this will be replaced with actual client data
const clientDemos: Record<string, ClientDemo> = {
  clearcardio: {
    clientName: "ClearCardio",
    brandColor: "#b91c1c",
    newsletters: [
      {
        id: "1",
        title: "Heart Disease Risk Assessment",
        description: "Educational newsletter about cardiac CT scanning and soft plaque detection",
        htmlContent: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Heart Disease Risk Assessment - ClearCardio Newsletter</title>
</head>
<body style="margin: 0; padding: 0;">
<div style="margin:0;padding:0;background-color:#f7f7f7;font-family:Arial, sans-serif"><div style="display:none;max-height:0;overflow:hidden;font-size:1px;line-height:1px;color:#f7f7f7">A high-stakes question: Is your heart truly safe? Why traditional tests miss the biggest risk factor.</div><table border="0" cellPadding="0" cellSpacing="0" width="100%" style="background-color:#f7f7f7"><tbody><tr><td align="center" style="padding:30px 0"><table border="0" cellPadding="0" cellSpacing="0" width="600" class="wrapper" style="background-color:#ffffff;border-radius:6px;overflow:hidden;box-shadow:0 5px 15px rgba(0,0,0,0.05);max-width:100%"><tbody><tr><td align="center" style="padding:20px;background-color:#000000;border-bottom:2px solid #e5e7eb"><a href="https://clearcardio.com" target="_blank" rel="noopener noreferrer"><img src="/images/clearcardio-logo.png" alt="ClearCardio" width="220" style="display:block;border:0;max-width:100%"/></a></td></tr><tr><td align="center" style="background-color:#b91c1c;padding:40px 30px"><h1 class="mobile-header" style="color:#ffffff;font-family:'Helvetica Neue', Arial, sans-serif;font-size:30px;font-weight:700;margin:0;letter-spacing:0.5px;line-height:1.2">The Invisible Threat: 9 Out of 10 Heart Attacks Start Here</h1><p style="color:#fecaca;font-family:Arial, sans-serif;font-size:15px;font-weight:500;letter-spacing:1px;margin-top:15px;margin-bottom:0">DON'T BE ONE OF THEM!</p></td></tr><tr><td class="mobile-padding" style="padding:40px 50px;background-color:#ffffff"><p class="mobile-text" style="color:#1f2937;font-size:17px;line-height:28px;margin-bottom:5px">Hi,</p><p class="mobile-text" style="color:#1f2937;font-size:17px;line-height:28px;margin-bottom:5px">I'm Dr. John Osborne, a cardiologist with more than 3 decades dedicated to the prevention and treatment of cardiovascular disease. If your routine physicals leave you with more questions than answers about your true heart risk then it's time to seek a higher degree of clarity.</p><table border="0" cellPadding="0" cellSpacing="0" width="100%"><tbody><tr><td style="border-bottom:1px solid #e5e7eb;padding-bottom:20px;margin-bottom:20px"></td></tr></tbody></table><h2 style="color:#b91c1c;font-family:'Helvetica Neue', Arial, sans-serif;font-size:22px;font-weight:700;margin-top:30px;margin-bottom:15px">Why Conventional Tests Fall Short</h2><p class="mobile-text" style="color:#1f2937;font-size:17px;line-height:28px">The key risk factor is not blockage, but plaque stability. Traditional tests are designed to find severe blockages, missing the majority of soft, unstable plaque - the kind that ruptures without warning and causes a sudden event.</p><table border="0" cellPadding="0" cellSpacing="0" width="100%" style="margin:25px 0"><tbody><tr><td style="background-color:#fef2f2;padding:20px;border:1px solid #fca5a5;border-radius:4px"><p style="color:#991b1b;font-size:16px;line-height:24px;margin:0;font-weight:600">ClearCardio utilizes Cardiac CT Angiography (CCTA) and specialized AI to quantify and locate soft plaque, providing a precise roadmap for personalized prevention - years ahead of symptoms.</p></td></tr></tbody></table><h2 style="color:#0ea5e9;font-family:'Helvetica Neue', Arial, sans-serif;font-size:22px;font-weight:700;margin-top:30px;margin-bottom:15px">The Benefits of ClearCardio's Life-Saving Heart Scan</h2><ul style="color:#1f2937;font-size:17px;line-height:28px;padding-left:20px"><li style="margin-bottom:12px"><b>Visible Clarity:</b> Get a 3D, high-resolution view of your coronary arteries, removing all guesswork.</li><li style="margin-bottom:12px"><b>Actionable Data:</b> AI analysis translates images into a quantified risk score and a definitive treatment plan.</li><li style="margin-bottom:12px"><b>Future-Proofing:</b> Find and stabilize disease now, ensuring you stay ahead of the curve.</li></ul><table border="0" cellPadding="0" cellSpacing="0" width="100%" style="margin-top:35px;background-color:#f7f7f7;border-top:2px solid #e5e7eb;border-bottom:2px solid #e5e7eb"><tbody><tr><td style="padding:25px"><h3 style="color:#1f2937;font-family:Arial, sans-serif;font-size:18px;font-weight:700;margin:0 0 15px 0">Should You Get Scanned?</h3><p style="color:#4b5563;font-size:16px;line-height:26px;margin-bottom:15px">The scan is essential if you have:</p><table border="0" cellPadding="0" cellSpacing="0" width="100%"><tbody><tr><td style="padding-bottom:10px;padding-left:10px"><p style="color:#4b5563;font-size:16px;line-height:24px;margin:0">•  A history of heart disease in your immediate family</p></td></tr><tr><td style="padding-bottom:10px;padding-left:10px"><p style="color:#4b5563;font-size:16px;line-height:24px;margin:0">•  Underlying conditions like high LDL, high blood pressure, or diabetes</p></td></tr><tr><td style="padding-left:10px"><p style="color:#4b5563;font-size:16px;line-height:24px;margin:0">•  A desire to stop relying on statistical risk and see your actual arterial health</p></td></tr></tbody></table></td></tr></tbody></table><table border="0" cellPadding="0" cellSpacing="0" width="100%" style="margin-top:40px"><tbody><tr><td align="center"><a href="https://clearcardio.com" style="background-color:#0ea5e9;color:#ffffff;padding:18px 36px;text-decoration:none;font-weight:bold;font-size:18px;border-radius:8px;display:inline-block;text-transform:uppercase;letter-spacing:0.5px;box-shadow:0 4px 10px rgba(14, 165, 233, 0.4)">Assess Your Risk: Schedule Consultation</a></td></tr></tbody></table></td></tr><tr><td style="background-color:#374151;padding:30px;color:#d1d5db;font-size:12px;line-height:18px;text-align:center"><p style="margin-bottom:10px;color:#ffffff;font-size:15px;font-weight:600">Your Health, Your Future, Your Clarity.</p>In partnership with ClearCardio™ and Dr. John Osborne, M.D., Ph.D.<br/>© 2025 ClearCardio. All rights reserved. | <a href="#" style="color:#9ca3af;text-decoration:underline">Unsubscribe</a></td></tr></tbody></table></td></tr></tbody></table><style>
        @media only screen and (max-width: 600px) {
          .wrapper { width: 100% !important; max-width: 100% !important; }
          .mobile-padding { padding: 20px !important; }
          .mobile-text { font-size: 16px !important; line-height: 24px !important; }
          .mobile-header { font-size: 24px !important; line-height: 30px !important; }
        }
        @media only screen and (max-width: 375px) {
          table { max-width: 100% !important; width: 100% !important; }
          img { max-width: 100% !important; height: auto !important; }
          td { word-wrap: break-word !important; }
          .wrapper { width: 100% !important; }
        }
      </style></div>
</body>
</html>`,
      },
      {
        id: "2",
        title: "Definitive Coronary Risk Assessment",
        description: "Scientific approach to coronary disease diagnosis and plaque detection",
        htmlContent: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Definitive Coronary Risk Assessment - ClearCardio Newsletter</title>
</head>
<body style="margin: 0; padding: 0;">
<div style="margin:0;padding:0;background-color:#f7f7f7;font-family:Arial, sans-serif"><div style="display:none;max-height:0;overflow:hidden;font-size:1px;line-height:1px;color:#f7f7f7">The science of ClearCardio's CCTA goes beyond risk factors to provide a definitive diagnosis of plaque burden.</div><table border="0" cellPadding="0" cellSpacing="0" width="100%" style="background-color:#f7f7f7"><tbody><tr><td align="center" style="padding:30px 0"><table border="0" cellPadding="0" cellSpacing="0" width="600" class="wrapper" style="background-color:#ffffff;border-radius:4px;overflow:hidden;border:1px solid #e5e7eb;max-width:100%"><tbody><tr><td align="center" style="padding:20px;background-color:#000000"><a href="https://clearcardio.com" target="_blank" rel="noopener noreferrer"><img src="/images/clearcardio-logo.png" alt="ClearCardio Assessment" width="220" style="display:block;border:0;max-width:100%"/></a></td></tr><tr><td align="center" style="padding:30px 40px;border-bottom:4px solid #d35400"><h1 class="mobile-header" style="color:#2c3e50;font-family:'Times New Roman', serif;font-size:30px;font-weight:bold;margin:0;line-height:1.2">The Invisible Threat: What Your Annual Physical Missed</h1><p style="color:#d35400;font-family:Arial, sans-serif;font-size:16px;font-weight:700;text-transform:uppercase;letter-spacing:1px;margin-top:15px;margin-bottom:0">9 Out of 10 Heart Attacks Start Here...</p></td></tr><tr><td class="mobile-padding" style="padding:40px 50px"><p style="color:#34495e;font-size:17px;line-height:28px;margin-bottom:30px">Hello,</p><p style="color:#34495e;font-size:17px;line-height:28px;margin-bottom:30px">Modern cardiac care requires precision. <b>ClearCardio</b> addresses the critical gap left by traditional testing: the failure to visually confirm the presence, severity, and type of plaque within the coronary arteries.</p><table border="0" cellPadding="0" cellSpacing="0" width="100%"><tbody><tr><td style="border-left:5px solid #e5e7eb;padding-left:20px"><h2 style="color:#d35400;font-family:Arial, sans-serif;font-size:20px;font-weight:700;margin-top:0;margin-bottom:15px">The Scientific Disconnect</h2><p style="color:#34495e;font-size:16px;line-height:26px;margin:0">Risk assessment based solely on age, cholesterol, and blood pressure is just an estimate, it's <i><b>educated guesswork</b></i>. It <b><i>does not</i></b> equate to a diagnosis.</p><p style="color:#34495e;font-size:16px;line-height:26px;margin-top:10px">Our method provides a direct measure of disease burden, identifying vulnerable soft plaque that is often the root cause of sudden cardiac events which can be fatal but are often preventable.</p></td></tr></tbody></table><div style="height:30px"> </div><table border="0" cellPadding="0" cellSpacing="0" width="100%" class="three-col-stack" style="text-align:center"><tbody><tr><td width="33%" valign="top" style="padding:0 10px 0 0;border-right:1px solid #f7f7f7"><div style="background-color:#f4f6f8;padding:15px;border-radius:4px"><p style="color:#2c3e50;font-size:15px;font-weight:700;margin:0 0 5px 0">Plaque Detection</p><p style="color:#7f8c8d;font-size:13px;margin:0">3D high-resolution imaging of your arteries to locate soft and calcified lesions</p></div></td><td width="33%" valign="top" style="padding:0 10px;border-right:1px solid #f7f7f7"><div style="background-color:#f4f6f8;padding:15px;border-radius:4px"><p style="color:#2c3e50;font-size:15px;font-weight:700;margin:0 0 5px 0">Risk Assessment</p><p style="color:#7f8c8d;font-size:13px;margin:0">AI + human expert quantifies disease burden accurately</p></div></td><td width="33%" valign="top" style="padding:0 0 0 10px"><div style="background-color:#f4f6f8;padding:15px;border-radius:4px"><p style="color:#2c3e50;font-size:15px;font-weight:700;margin:0 0 5px 0">Treatment Protocol</p><p style="color:#7f8c8d;font-size:13px;margin:0">A focused visit, clear follow-up and a custom action plan</p></div></td></tr></tbody></table><div style="height:30px"> </div><p style="color:#34495e;font-size:17px;line-height:28px;margin-bottom:25px">We provide more than screening; we deliver a definitive, non-invasive diagnosis that empowers you and your physician to initiate the most effective prevention strategy. Your proactive approach begins with <b>VISUAL CONFIRMATION</b>.</p><table border="0" cellPadding="0" cellSpacing="0" width="100%" style="margin-top:30px"><tbody><tr><td align="center"><a href="https://clearcardio.com" style="background-color:#d35400;color:#ffffff;padding:18px 36px;text-decoration:none;font-weight:bold;font-size:18px;border-radius:4px;display:inline-block;text-transform:uppercase;letter-spacing:0.5px;box-shadow:0 4px 10px rgba(211, 84, 0, 0.4)">Stop Guessing: Schedule a Consultation</a></td></tr></tbody></table></td></tr><tr><td style="background-color:#34495e;padding:30px;color:#f7f7f7;font-size:12px;line-height:18px;text-align:center;border-top:1px solid #2c3e50"><p style="margin-bottom:10px;color:#ffffff;font-size:15px;font-weight:600">ClearCardio: Definitive Answers for Prevention.</p>A Clinical Initiative in Partnership with Leading Cardiovascular Specialists.<br/>© 2025 ClearCardio Health. All rights reserved.</td></tr></tbody></table></td></tr></tbody></table><style>
        @media only screen and (max-width: 600px) {
          .wrapper { width: 100% !important; max-width: 100% !important; }
          .mobile-padding { padding: 25px 20px !important; }
          .mobile-header { font-size: 26px !important; line-height: 32px !important; }
          .three-col-stack td { display: block; width: 100%; padding-bottom: 20px !important; }
        }
      </style></div>
</body>
</html>`,
      },
      {
        id: "3",
        title: "Finding Silent Heart Disease",
        description: "Dr. Osborne explains why imaging matters for early detection",
        htmlContent: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Finding Silent Heart Disease - ClearCardio Newsletter</title>
</head>
<body style="margin: 0; padding: 0;">
<div style="margin:0;padding:0;background-color:#f8f9fa;font-family:Arial, sans-serif"><div style="display:none;max-height:0;overflow:hidden;font-size:1px;line-height:1px;color:#f8f9fa">A clear image beats a guess — learn what a ClearCardio scan shows.</div><table border="0" cellPadding="0" cellSpacing="0" width="100%" style="background-color:#f8f9fa"><tbody><tr><td align="center" style="padding:40px 0"><table border="0" cellPadding="0" cellSpacing="0" width="600" class="wrapper" style="background-color:#ffffff;border:1px solid #e5e7eb;max-width:100%"><tbody><tr><td align="center" style="padding:20px;background-color:#000000;border-bottom:4px solid #1e3a8a"><a href="https://clearcardio.com" target="_blank" rel="noopener noreferrer"><img src="/images/clearcardio-logo.png" alt="ClearCardio" width="220" style="display:block;border:0;max-width:100%"/></a></td></tr><tr><td align="center" style="background-color:#eff6ff;padding:40px 30px"><h1 class="mobile-header" style="color:#1e3a8a;font-family:Georgia, serif;font-size:28px;font-weight:400;margin:0;letter-spacing:0.5px;line-height:1.3">The Invisible Threat: Finding Silent Heart Disease</h1><p style="color:#1e40af;font-family:Arial, sans-serif;font-size:14px;letter-spacing:1px;margin-top:15px;margin-bottom:0">Why ClearCardio's Scan Matters: Stop Guessing, Start Seeing</p></td></tr><tr><td class="mobile-padding" style="padding:40px 50px"><p class="mobile-text" style="color:#333333;font-size:16px;line-height:26px;margin-bottom:25px"><strong>Hi,</strong></p><p class="mobile-text" style="color:#333333;font-size:16px;line-height:26px;margin-bottom:15px">I'm Dr. John Osborne, a cardiologist with 30+ years working at the intersection of heart-imaging, prevention, and patient-first care. If you've ever wondered whether "everything looks fine" on routine tests means you're truly safe, this important message is for you.</p><table border="0" cellPadding="0" cellSpacing="0" width="100%"><tbody><tr><td style="border-bottom:1px solid #e5e7eb;padding-bottom:20px;margin-bottom:20px"></td></tr></tbody></table><h2 style="color:#1e3a8a;font-family:Georgia, serif;font-size:20px;margin-top:30px;margin-bottom:15px">9 Out of 10 Heart Attacks Start Here</h2><p class="mobile-text" style="color:#333333;font-size:16px;line-height:26px">Heart attacks almost always start with plaque that builds silently inside the coronary arteries; and you can't feel it. Many traditional tests (routine bloodwork, EKGs, stress tests) can miss the <strong>soft plaque</strong> that later ruptures and causes sudden events.</p><table border="0" cellPadding="0" cellSpacing="0" width="100%" style="margin:25px 0"><tbody><tr><td style="background-color:#eff6ff;padding:20px;border-left:4px solid #1e3a8a"><p style="color:#1e40af;font-size:15px;line-height:24px;margin:0;font-style:italic">"ClearCardio's approach uses advanced cardiac CT angiography (CCTA) combined with AI analysis to detect and measure both calcified and soft plaque — often years before symptoms appear."</p></td></tr></tbody></table><h2 style="color:#1e3a8a;font-family:Georgia, serif;font-size:20px;margin-top:30px;margin-bottom:15px">What ClearCardio Actually Does For Patients</h2><ul style="color:#333333;font-size:16px;line-height:26px;padding-left:20px"><li style="margin-bottom:10px"><strong>Direct, image-based answers.</strong> Instead of <i>estimating</i> risk from numbers, ClearCardio gives you a 3D high-resolution look at your arteries. A clear image beats a guess, every time.</li><li style="margin-bottom:10px"><strong>AI + expert interpretation.</strong> Proprietary AI analysis highlights plaque and translates images into a quantified risk score, which further supports a specialist's expert read and leads to a definitive treatment plan.</li><li style="margin-bottom:10px"><strong>Concierge-style prevention.</strong> Fast, non-invasive scans and clear follow-up: a focused visit, images, and a personalized action plan.</li></ul><h2 style="color:#1e3a8a;font-family:Georgia, serif;font-size:20px;margin-top:30px;margin-bottom:15px">The Dangers of Ignoring Risk</h2><p class="mobile-text" style="color:#333333;font-size:16px;line-height:26px"><strong>Sudden events from silent disease.</strong> Soft plaque can rupture without warning. That's why imaging matters: it finds the disease in a window when prevention can still be decisive and save lives.</p><p class="mobile-text" style="color:#333333;font-size:16px;line-height:26px"><strong>Missed opportunities to reverse risk.</strong> Targeted therapy can stabilize or reduce plaque when started early. This can be the difference between life and death.</p><table border="0" cellPadding="0" cellSpacing="0" width="100%" style="margin-top:35px;background-color:#fffbeb;border:1px solid #fcd34d"><tbody><tr><td style="padding:25px"><h3 style="color:#92400e;font-family:Georgia, serif;font-size:18px;margin:0 0 15px 0">Is the Scan Right for You?</h3><p style="font-size:15px;line-height:24px;margin-bottom:15px">Consider a scan if you have:</p><table border="0" cellPadding="0" cellSpacing="0" width="100%"><tbody><tr><td style="padding-bottom:8px;padding-left:10px"><p style="color:#4b5563;font-size:15px;line-height:24px;margin:0">•  Family history of early heart disease</p></td></tr><tr><td style="padding-bottom:8px;padding-left:10px"><p style="color:#4b5563;font-size:15px;line-height:24px;margin:0">•  High cholesterol or poorly controlled LDL</p></td></tr><tr><td style="padding-bottom:8px;padding-left:10px"><p style="color:#4b5563;font-size:15px;line-height:24px;margin:0">•  Hypertension or diabetes</p></td></tr><tr><td style="padding-bottom:8px;padding-left:10px"><p style="color:#4b5563;font-size:15px;line-height:24px;margin:0">•  Past or current smoking</p></td></tr><tr><td style="padding-left:10px"><p style="color:#4b5563;font-size:15px;line-height:24px;margin:0">•  Vague chest symptoms or fatigue</p></td></tr></tbody></table></td></tr></tbody></table><table border="0" cellPadding="0" cellSpacing="0" width="100%" style="margin-top:40px"><tbody><tr><td align="center"><a href="https://clearcardio.com" style="background-color:#b45309;color:#ffffff;padding:16px 32px;text-decoration:none;font-weight:bold;font-size:16px;border-radius:4px;display:inline-block">See Your Risk: Schedule Consultation</a></td></tr></tbody></table></td></tr><tr><td style="background-color:#1f2937;padding:30px;color:#9ca3af;font-size:12px;line-height:18px;text-align:center"><p style="margin-bottom:10px;color:#ffffff;font-size:14px">Your Health, Your Future, Your Clarity.</p>In partnership with ClearCardio™ and Dr. John Osborne, M.D., Ph.D.<br/>© 2025 ClearCardio. All rights reserved.</td></tr></tbody></table></td></tr></tbody></table><style>
        @media only screen and (max-width: 600px) {
          .wrapper { width: 100% !important; max-width: 100% !important; }
          .mobile-padding { padding: 20px !important; }
          .mobile-text { font-size: 16px !important; line-height: 24px !important; }
          .mobile-header { font-size: 24px !important; line-height: 30px !important; }
        }
      </style></div>
</body>
</html>`,
      },
      {
        id: "4",
        title: "Patient Success Story",
        description: "Michael's story: How one scan changed everything",
        htmlContent: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Patient Success Story - ClearCardio Newsletter</title>
</head>
<body style="margin: 0; padding: 0;">
<div style="margin:0;padding:0;background-color:#f8f9fa;font-family:Arial, sans-serif"><div style="display:none;max-height:0;overflow:hidden;font-size:1px;line-height:1px;color:#f8f9fa">Real stories from patients who took control of their heart health.</div><table border="0" cellPadding="0" cellSpacing="0" width="100%" style="background-color:#f8f9fa"><tbody><tr><td align="center" style="padding:40px 0"><table border="0" cellPadding="0" cellSpacing="0" width="600" class="wrapper" style="background-color:#ffffff;border:1px solid #e5e7eb;max-width:100%"><tbody><tr><td align="center" style="padding:20px;background-color:#404040"><a href="https://clearcardio.com" target="_blank" rel="noopener noreferrer"><img src="/images/clearcardio-logo.png" alt="ClearCardio" width="220" style="display:block;border:0;max-width:100%"/></a></td></tr><tr><td style="background-color:#3b82f6;padding:60px 30px;text-align:center"><h1 class="mobile-header" style="color:#ffffff;font-family:Georgia, serif;font-size:32px;font-weight:400;margin:0;margin-bottom:15px;letter-spacing:0.5px;line-height:1.2">"I Had No Idea I Was at Risk"</h1><p style="color:#dbeafe;font-family:Arial, sans-serif;font-size:16px;margin:0;font-style:italic">Michael's Story: How One Scan Changed Everything</p></td></tr><tr><td class="mobile-padding" style="padding:40px 50px"><table border="0" cellPadding="0" cellSpacing="0" width="100%" style="margin-bottom:30px"><tbody><tr><td style="background-color:#fef3c7;padding:25px;border-left:4px solid #f59e0b"><p class="mobile-text" style="color:#78350f;font-size:16px;line-height:26px;margin:0;margin-bottom:15px"><strong>Michael, 52, Executive</strong></p><p class="mobile-text" style="color:#451a03;font-size:15px;line-height:24px;margin:0;font-style:italic">"My cholesterol was slightly elevated, but my doctor said it wasn't urgent. I felt fine—running 5K races, eating well, no symptoms. Then I got a ClearCardio scan."</p></td></tr></tbody></table><p class="mobile-text" style="color:#333333;font-size:16px;line-height:26px;margin-bottom:25px">The scan revealed <strong>significant soft plaque</strong> in two coronary arteries—the kind that doesn't show up on standard tests but is responsible for most heart attacks.</p><p class="mobile-text" style="color:#333333;font-size:16px;line-height:26px;margin-bottom:25px">Within days, Michael started targeted medication and lifestyle changes. Six months later, follow-up imaging showed his plaque had stabilized.</p><table border="0" cellPadding="0" cellSpacing="0" width="100%" style="margin:30px 0"><tbody><tr><td style="border-bottom:2px solid #e5e7eb"></td></tr></tbody></table><h2 style="color:#1e3a8a;font-family:Georgia, serif;font-size:22px;margin-top:30px;margin-bottom:15px">Why Silent Disease Is So Dangerous</h2><p class="mobile-text" style="color:#333333;font-size:16px;line-height:26px;margin-bottom:20px">Most people with early coronary disease have <strong>zero symptoms</strong>. Traditional screenings often miss the problem until it's too late.</p><table border="0" cellPadding="0" cellSpacing="0" width="100%" style="margin-bottom:30px"><tbody><tr><td style="background-color:#dbeafe;padding:25px;text-align:center"><h3 style="color:#1e40af;font-family:Georgia, serif;font-size:48px;margin:0;margin-bottom:5px;font-weight:bold">50%</h3><p style="color:#1e3a8a;font-size:14px;margin:0;text-transform:uppercase;letter-spacing:1px">of heart attacks occur in people<br/>with "normal" cholesterol levels</p></td></tr></tbody></table><h2 style="color:#1e3a8a;font-family:Georgia, serif;font-size:22px;margin-top:30px;margin-bottom:15px">The ClearCardio Difference</h2><table border="0" cellPadding="0" cellSpacing="0" width="100%" style="margin-bottom:20px"><tbody><tr><td style="padding-bottom:12px;padding-left:20px"><p class="mobile-text" style="color:#333333;font-size:16px;line-height:24px;margin:0">•  <strong>Direct visualization</strong> of your coronary arteries with advanced CCTA imaging</p></td></tr><tr><td style="padding-bottom:12px;padding-left:20px"><p class="mobile-text" style="color:#333333;font-size:16px;line-height:24px;margin:0">•  <strong>AI-powered analysis</strong> quantifies both soft and calcified plaque</p></td></tr><tr><td style="padding-left:20px"><p class="mobile-text" style="color:#333333;font-size:16px;line-height:24px;margin:0">•  <strong>Personalized action plan</strong> from prevention specialists</p></td></tr></tbody></table><table border="0" cellPadding="0" cellSpacing="0" width="100%" style="margin:35px 0"><tbody><tr><td style="background-color:#f0fdf4;padding:25px;border-left:4px solid #10b981"><p style="color:#14532d;font-size:16px;line-height:26px;margin:0;margin-bottom:10px;font-style:italic">"ClearCardio gave me answers when traditional medicine was just giving me guesses. I'm grateful every day that I took this step."</p><p style="color:#166534;font-size:14px;margin:0;font-weight:bold">— Michael R.</p></td></tr></tbody></table><table border="0" cellPadding="0" cellSpacing="0" width="100%" style="margin-top:40px;background-color:#0f172a;text-align:center"><tbody><tr><td style="padding:35px 30px"><h3 style="color:#ffffff;font-family:Georgia, serif;font-size:20px;margin:0 0 15px 0">Don't Wait for Symptoms</h3><p style="color:#cbd5e1;font-size:15px;line-height:24px;margin:0 0 25px 0">Early detection can be life-saving. See what's really happening in your arteries.</p><a href="https://clearcardio.com" style="background-color:#f59e0b;color:#ffffff;padding:16px 36px;text-decoration:none;font-weight:bold;font-size:16px;border-radius:4px;display:inline-block">Schedule Your Scan Today</a></td></tr></tbody></table></td></tr><tr><td style="background-color:#1f2937;padding:30px;color:#9ca3af;font-size:12px;line-height:18px;text-align:center"><p style="margin-bottom:10px;color:#ffffff;font-size:14px">Take Control of Your Heart Health</p>ClearCardio™ — Advanced Cardiac Imaging &amp; Prevention<br/>© 2025 ClearCardio. All rights reserved.</td></tr></tbody></table></td></tr></tbody></table><style>
        @media only screen and (max-width: 600px) {
          .wrapper { width: 100% !important; max-width: 100% !important; }
          .mobile-padding { padding: 20px !important; }
          .mobile-text { font-size: 15px !important; line-height: 24px !important; }
          .mobile-header { font-size: 26px !important; line-height: 32px !important; }
        }
      </style></div>
</body>
</html>`,
      },
      {
        id: "5",
        title: "Modern Prevention Approach",
        description: "Clean, modern design showcasing prevention methodology",
        htmlContent: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Modern Prevention Approach - ClearCardio Newsletter</title>
</head>
<body style="margin: 0; padding: 0;">
<div style="margin:0;padding:0;background-color:#ffffff;font-family:system-ui, -apple-system, sans-serif"><div style="display:none;max-height:0;overflow:hidden;font-size:1px;line-height:1px;color:#ffffff">Modern heart health starts with knowing what's inside your arteries.</div><table border="0" cellPadding="0" cellSpacing="0" width="100%" style="background-color:#f9fafb"><tbody><tr><td align="center" style="padding:20px 0"><table border="0" cellPadding="0" cellSpacing="0" width="640" class="wrapper" style="background-color:#ffffff;max-width:100%"><tbody><tr><td align="center" style="padding:40px 30px 30px 30px;background-color:#404040"><a href="https://clearcardio.com" target="_blank" rel="noopener noreferrer"><img src="/images/clearcardio-logo.png" alt="ClearCardio" width="180" style="display:block;border:0;max-width:100%"/></a></td></tr><tr><td class="mobile-padding" style="padding:20px 50px 40px 50px"><h1 class="mobile-header" style="color:#0f172a;font-family:system-ui, -apple-system, sans-serif;font-size:42px;font-weight:700;margin:0;line-height:1.1;letter-spacing:-0.02em">Prevention.<br/>Precision.<br/>Peace of Mind.</h1></td></tr><tr><td class="mobile-padding" style="padding:0 50px 20px 50px"><table border="0" cellPadding="0" cellSpacing="0" width="100%" style="background-color:#ecfeff;border-radius:12px"><tbody><tr><td style="padding:40px"><div style="display:inline-block;background-color:#06b6d4;color:#ffffff;font-size:12px;font-weight:700;padding:6px 12px;border-radius:6px;margin-bottom:20px;text-transform:uppercase;letter-spacing:0.5px">The Challenge</div><h2 style="color:#0e7490;font-size:24px;font-weight:700;margin:0 0 15px 0;line-height:1.3">You Can't Feel Heart Disease Coming</h2><p class="mobile-text" style="color:#164e63;font-size:16px;line-height:28px;margin:0">Traditional tests measure risk factors—but they don't show you what's actually happening inside your arteries. By the time symptoms appear, significant damage may already be done.</p></td></tr></tbody></table></td></tr><tr><td class="mobile-padding" style="padding:0 50px 20px 50px"><table border="0" cellPadding="0" cellSpacing="0" width="100%" style="background-color:#f0fdfa;border-radius:12px"><tbody><tr><td style="padding:40px"><div style="display:inline-block;background-color:#14b8a6;color:#ffffff;font-size:12px;font-weight:700;padding:6px 12px;border-radius:6px;margin-bottom:20px;text-transform:uppercase;letter-spacing:0.5px">The Solution</div><h2 style="color:#0f766e;font-size:24px;font-weight:700;margin:0 0 15px 0;line-height:1.3">See Inside Your Arteries with AI Precision</h2><p class="mobile-text" style="color:#115e59;font-size:16px;line-height:28px;margin:0 0 20px 0">ClearCardio uses advanced cardiac CT angiography combined with proprietary AI to create a complete picture of your coronary arteries.</p><table border="0" cellPadding="0" cellSpacing="0" width="100%"><tbody><tr><td style="padding-bottom:12px"><span style="color:#14b8a6;font-size:18px;margin-right:10px">•</span><span style="color:#115e59;font-size:15px;font-weight:600">Detect soft and calcified plaque</span></td></tr><tr><td style="padding-bottom:12px"><span style="color:#14b8a6;font-size:18px;margin-right:10px">•</span><span style="color:#115e59;font-size:15px;font-weight:600">Quantify your exact risk level</span></td></tr><tr><td><span style="color:#14b8a6;font-size:18px;margin-right:10px">•</span><span style="color:#115e59;font-size:15px;font-weight:600">Get a personalized prevention plan</span></td></tr></tbody></table></td></tr></tbody></table></td></tr><tr><td class="mobile-padding" style="padding:20px 50px 20px 50px"><table border="0" cellPadding="0" cellSpacing="0" width="100%"><tbody><tr><td width="33%" style="padding:20px;text-align:center;border-right:1px solid #e5e7eb"><div style="color:#06b6d4;font-size:36px;font-weight:700;margin-bottom:8px">90%</div><div style="color:#64748b;font-size:13px;line-height:18px">of heart attacks<br/>from plaque</div></td><td width="33%" style="padding:20px;text-align:center;border-right:1px solid #e5e7eb"><div style="color:#06b6d4;font-size:36px;font-weight:700;margin-bottom:8px">50%</div><div style="color:#64748b;font-size:13px;line-height:18px">have "normal"<br/>cholesterol</div></td><td width="33%" style="padding:20px;text-align:center"><div style="color:#06b6d4;font-size:36px;font-weight:700;margin-bottom:8px">0</div><div style="color:#64748b;font-size:13px;line-height:18px">symptoms in<br/>early stages</div></td></tr></tbody></table></td></tr><tr><td class="mobile-padding" style="padding:0 50px 20px 50px"><table border="0" cellPadding="0" cellSpacing="0" width="100%" style="background-color:#fef3c7;border-radius:12px"><tbody><tr><td style="padding:40px"><div style="display:inline-block;background-color:#f59e0b;color:#ffffff;font-size:12px;font-weight:700;padding:6px 12px;border-radius:6px;margin-bottom:20px;text-transform:uppercase;letter-spacing:0.5px">Who Benefits</div><h2 style="color:#92400e;font-size:24px;font-weight:700;margin:0 0 20px 0;line-height:1.3">Is a ClearCardio Scan Right for You?</h2><table border="0" cellPadding="0" cellSpacing="0" width="100%"><tbody><tr><td style="padding-bottom:10px"><span style="color:#78350f;font-size:15px">✓ Family history of heart disease</span></td></tr><tr><td style="padding-bottom:10px"><span style="color:#78350f;font-size:15px">✓ High cholesterol or blood pressure</span></td></tr><tr><td style="padding-bottom:10px"><span style="color:#78350f;font-size:15px">✓ Diabetes or prediabetes</span></td></tr><tr><td style="padding-bottom:10px"><span style="color:#78350f;font-size:15px">✓ Current or former smoker</span></td></tr><tr><td><span style="color:#78350f;font-size:15px">✓ Age 40+ with risk factors</span></td></tr></tbody></table></td></tr></tbody></table></td></tr><tr><td class="mobile-padding" style="padding:40px 50px 60px 50px;text-align:center"><h3 style="color:#0f172a;font-size:28px;font-weight:700;margin:0 0 15px 0;line-height:1.2">Know Your Risk. Take Control.</h3><p style="color:#64748b;font-size:16px;margin:0 0 30px 0;line-height:1.6">Schedule your comprehensive cardiac assessment today.</p><a href="https://clearcardio.com" style="background-color:#06b6d4;color:#ffffff;padding:18px 40px;text-decoration:none;font-weight:700;font-size:16px;border-radius:8px;display:inline-block;letter-spacing:0.5px">GET STARTED</a></td></tr><tr><td style="background-color:#f8fafc;padding:40px 30px;text-align:center;border-top:1px solid #e2e8f0"><p style="color:#0f172a;font-size:14px;font-weight:600;margin:0 0 8px 0">ClearCardio</p><p style="color:#64748b;font-size:12px;margin:0 0 5px 0">Advanced Cardiac Imaging &amp; Prevention</p><p style="color:#94a3b8;font-size:11px;margin:0">© 2025 ClearCardio. All rights reserved.</p></td></tr></tbody></table></td></tr></tbody></table><style>
        @media only screen and (max-width: 640px) {
          .wrapper { width: 100% !important; max-width: 100% !important; }
          .mobile-padding { padding: 20px !important; }
          .mobile-text { font-size: 15px !important; line-height: 24px !important; }
          .mobile-header { font-size: 32px !important; line-height: 36px !important; }
        }
      </style></div>
</body>
</html>`,
      },
      {
        id: "6",
        title: "Dark Modern Tech Design",
        description: "Premium dark theme with AI-focused messaging",
        htmlContent: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Dark Modern Tech Design - ClearCardio Newsletter</title>
</head>
<body style="margin: 0; padding: 0;">
<div style="margin:0;padding:0;background-color:#0f172a;font-family:system-ui, -apple-system, sans-serif"><div style="display:none;max-height:0;overflow:hidden;font-size:1px;line-height:1px;color:#0f172a">Advanced cardiac imaging for the modern age. Know your heart health status.</div><table border="0" cellPadding="0" cellSpacing="0" width="100%" style="background-color:#0f172a"><tbody><tr><td align="center" style="padding:0"><table border="0" cellPadding="0" cellSpacing="0" width="600" class="wrapper" style="background-color:#0f172a;max-width:100%"><tbody><tr><td align="center" style="padding:40px 30px 20px 30px;background-color:#0f172a"><a href="https://clearcardio.com" target="_blank" rel="noopener noreferrer"><img src="/images/clearcardio-logo.png" alt="ClearCardio" width="200" style="display:block;border:0;max-width:100%"/></a></td></tr><tr><td style="background-color:#1e293b;padding:60px 40px 30px 40px;text-align:center"><table border="0" cellPadding="0" cellSpacing="0" width="100%"><tbody><tr><td align="center" style="text-align:center"><table border="0" cellPadding="0" cellSpacing="0" style="margin-bottom:25px;margin-left:auto;margin-right:auto"><tbody><tr><td style="background-color:rgba(16, 185, 129, 0.2);color:#10b981;font-size:11px;font-weight:700;padding:8px 16px;border-radius:20px;text-transform:uppercase;letter-spacing:1.5px">Next-Gen Cardiac Screening</td></tr></tbody></table></td></tr></tbody></table><h1 class="mobile-header" style="color:#ffffff;font-family:system-ui, -apple-system, sans-serif;font-size:48px;font-weight:800;margin:0 0 20px 0;line-height:1.1;letter-spacing:-0.03em">Your Heart.<br/><span style="color:#10b981">Crystal Clear.</span></h1><p style="color:#cbd5e1;font-size:18px;margin:0;line-height:1.6;max-width:480px;margin-left:auto;margin-right:auto">Advanced AI-powered imaging reveals what traditional tests can't see.</p></td></tr><tr><td class="mobile-padding" style="padding:30px 50px 50px 50px;background-color:#1e293b"><table border="0" cellPadding="0" cellSpacing="0" width="100%" style="margin-bottom:40px"><tbody><tr><td width="50%" style="padding:0 10px 20px 0;vertical-align:top"><table border="0" cellPadding="0" cellSpacing="0" width="100%" style="background-color:#0f172a;border-radius:12px;height:100%"><tbody><tr><td style="padding:30px"><table border="0" cellPadding="0" cellSpacing="0" style="margin-bottom:20px"><tbody><tr><td width="48" height="48" align="center" valign="middle" style="background-color:rgba(16, 185, 129, 0.15);border-radius:12px;color:#10b981;font-size:20px">⚙</td></tr></tbody></table><h3 style="color:#10b981;font-size:18px;font-weight:700;margin:0 0 10px 0">AI Analysis</h3><p style="color:#94a3b8;font-size:14px;line-height:22px;margin:0">Proprietary algorithms detect plaque with unmatched precision</p></td></tr></tbody></table></td><td width="50%" style="padding:0 0 20px 10px;vertical-align:top"><table border="0" cellPadding="0" cellSpacing="0" width="100%" style="background-color:#0f172a;border-radius:12px;height:100%"><tbody><tr><td style="padding:30px"><table border="0" cellPadding="0" cellSpacing="0" style="margin-bottom:20px"><tbody><tr><td width="48" height="48" align="center" valign="middle" style="background-color:rgba(16, 185, 129, 0.15);border-radius:12px;color:#10b981;font-size:20px">⚡</td></tr></tbody></table><h3 style="color:#10b981;font-size:18px;font-weight:700;margin:0 0 10px 0">Fast Results</h3><p style="color:#94a3b8;font-size:14px;line-height:22px;margin:0">Complete scan and consultation in under 2 hours</p></td></tr></tbody></table></td></tr><tr><td width="50%" style="padding:0 10px 0 0;vertical-align:top"><table border="0" cellPadding="0" cellSpacing="0" width="100%" style="background-color:#0f172a;border-radius:12px;height:100%"><tbody><tr><td style="padding:30px"><table border="0" cellPadding="0" cellSpacing="0" style="margin-bottom:20px"><tbody><tr><td width="48" height="48" align="center" valign="middle" style="background-color:rgba(16, 185, 129, 0.15);border-radius:12px;color:#10b981;font-size:20px">▦</td></tr></tbody></table><h3 style="color:#10b981;font-size:18px;font-weight:700;margin:0 0 10px 0">3D Imaging</h3><p style="color:#94a3b8;font-size:14px;line-height:22px;margin:0">High-resolution visualization of every coronary artery</p></td></tr></tbody></table></td><td width="50%" style="padding:0 0 0 10px;vertical-align:top"><table border="0" cellPadding="0" cellSpacing="0" width="100%" style="background-color:#0f172a;border-radius:12px;height:100%"><tbody><tr><td style="padding:30px"><table border="0" cellPadding="0" cellSpacing="0" style="margin-bottom:20px"><tbody><tr><td width="48" height="48" align="center" valign="middle" style="background-color:rgba(16, 185, 129, 0.15);border-radius:12px;color:#10b981;font-size:20px">☰</td></tr></tbody></table><h3 style="color:#10b981;font-size:18px;font-weight:700;margin:0 0 10px 0">Action Plan</h3><p style="color:#94a3b8;font-size:14px;line-height:22px;margin:0">Personalized prevention strategy based on your results</p></td></tr></tbody></table></td></tr></tbody></table><table border="0" cellPadding="0" cellSpacing="0" width="100%" style="margin:40px 0"><tbody><tr><td style="height:1px;background-color:#10b981"></td></tr></tbody></table><h2 style="color:#ffffff;font-size:32px;font-weight:700;margin:0 0 30px 0;text-align:center;letter-spacing:-0.02em">The Hidden Epidemic</h2><table border="0" cellPadding="0" cellSpacing="0" width="100%" style="margin-bottom:40px"><tbody><tr><td width="33.33%" style="padding:25px 15px;text-align:center;border-right:1px solid #334155"><div style="color:#10b981;font-size:52px;font-weight:800;margin-bottom:10px;line-height:1">9<span style="font-size:32px">/10</span></div><div style="color:#94a3b8;font-size:13px;line-height:20px;text-transform:uppercase;letter-spacing:0.5px">Heart attacks<br/>start with plaque</div></td><td width="33.33%" style="padding:25px 15px;text-align:center;border-right:1px solid #334155"><div style="color:#10b981;font-size:52px;font-weight:800;margin-bottom:10px;line-height:1">50<span style="font-size:32px">%</span></div><div style="color:#94a3b8;font-size:13px;line-height:20px;text-transform:uppercase;letter-spacing:0.5px">"Normal" tests<br/>before heart attack</div></td><td width="33.33%" style="padding:25px 15px;text-align:center"><div style="color:#10b981;font-size:52px;font-weight:800;margin-bottom:10px;line-height:1">0</div><div style="color:#94a3b8;font-size:13px;line-height:20px;text-transform:uppercase;letter-spacing:0.5px">Early warning<br/>symptoms</div></td></tr></tbody></table><p class="mobile-text" style="color:#cbd5e1;font-size:17px;line-height:30px;margin-bottom:25px;text-align:center">Traditional cardiovascular screening measures <em>risk factors</em>—but ClearCardio shows you the <strong style="color:#10b981">actual disease</strong>.</p><table border="0" cellPadding="0" cellSpacing="0" width="100%" style="margin:40px 0"><tbody><tr><td style="background-color:rgba(16, 185, 129, 0.1);padding:35px;border-radius:12px;border-left:4px solid #10b981"><p style="color:#e2e8f0;font-size:19px;line-height:32px;margin:0 0 15px 0;font-style:italic;font-weight:500">"With CCTA and AI analysis, we can identify vulnerable plaque years before it becomes life-threatening. This is the future of preventive cardiology."</p><p style="color:#10b981;font-size:14px;margin:0;font-weight:700;letter-spacing:0.5px">— Dr. John Osborne, M.D., Ph.D.</p></td></tr></tbody></table><h2 style="color:#ffffff;font-size:28px;font-weight:700;margin:50px 0 25px 0;letter-spacing:-0.02em">Is This Scan Right for You?</h2><table border="0" cellPadding="0" cellSpacing="0" width="100%"><tbody><tr><td style="padding-bottom:15px"><table border="0" cellPadding="0" cellSpacing="0" width="100%"><tbody><tr><td width="30" style="vertical-align:top"><div style="width:20px;height:20px;background-color:#10b981;border-radius:4px;margin-top:2px"></div></td><td><p style="color:#cbd5e1;font-size:16px;line-height:24px;margin:0">Family history of heart disease</p></td></tr></tbody></table></td></tr><tr><td style="padding-bottom:15px"><table border="0" cellPadding="0" cellSpacing="0" width="100%"><tbody><tr><td width="30" style="vertical-align:top"><div style="width:20px;height:20px;background-color:#10b981;border-radius:4px;margin-top:2px"></div></td><td><p style="color:#cbd5e1;font-size:16px;line-height:24px;margin:0">High cholesterol, blood pressure, or diabetes</p></td></tr></tbody></table></td></tr><tr><td style="padding-bottom:15px"><table border="0" cellPadding="0" cellSpacing="0" width="100%"><tbody><tr><td width="30" style="vertical-align:top"><div style="width:20px;height:20px;background-color:#10b981;border-radius:4px;margin-top:2px"></div></td><td><p style="color:#cbd5e1;font-size:16px;line-height:24px;margin:0">Age 40+ with cardiovascular risk factors</p></td></tr></tbody></table></td></tr><tr><td><table border="0" cellPadding="0" cellSpacing="0" width="100%"><tbody><tr><td width="30" style="vertical-align:top"><div style="width:20px;height:20px;background-color:#10b981;border-radius:4px;margin-top:2px"></div></td><td><p style="color:#cbd5e1;font-size:16px;line-height:24px;margin:0">Anyone seeking definitive answers about heart health</p></td></tr></tbody></table></td></tr></tbody></table></td></tr><tr><td style="background-color:#10b981;padding:50px 40px;text-align:center"><h3 style="color:#ffffff;font-size:32px;font-weight:800;margin:0 0 15px 0;letter-spacing:-0.02em">Don't Wait for Symptoms</h3><p style="color:#d1fae5;font-size:17px;margin:0 0 35px 0;line-height:1.6">Early detection saves lives. Get clarity on your heart health today.</p><a href="https://clearcardio.com" style="background-color:#ffffff;color:#059669;padding:18px 45px;text-decoration:none;font-weight:800;font-size:16px;border-radius:10px;display:inline-block;letter-spacing:0.5px;text-transform:uppercase;box-shadow:0 10px 30px rgba(0, 0, 0, 0.3)">Schedule Your Scan</a></td></tr><tr><td style="background-color:#020617;padding:40px 30px;text-align:center;border-top:1px solid #1e293b"><p style="color:#10b981;font-size:15px;font-weight:700;margin:0 0 8px 0;letter-spacing:1px">CLEARCARDIO</p><p style="color:#64748b;font-size:12px;margin:0 0 5px 0;line-height:18px">Advanced Cardiac Imaging &amp; AI-Powered Prevention</p><p style="color:#475569;font-size:11px;margin:0">© 2025 ClearCardio. All rights reserved.</p></td></tr></tbody></table></td></tr></tbody></table><style>
        @media only screen and (max-width: 600px) {
          .wrapper { width: 100% !important; max-width: 100% !important; }
          .mobile-padding { padding: 25px !important; }
          .mobile-text { font-size: 15px !important; line-height: 24px !important; }
          .mobile-header { font-size: 36px !important; line-height: 40px !important; }
          table[width="50%"] {
            width: 100% !important;
            display: block !important;
            padding: 0 0 20px 0 !important;
          }
        }
      </style></div>
</body>
</html>`,
      },
    ],
  },
};

const Demo = () => {
  const { clientId } = useParams<{ clientId: string }>();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [viewMode, setViewMode] = useState<"desktop" | "mobile">("desktop");
  const [showGallery, setShowGallery] = useState(false);
  const [iframeHeight, setIframeHeight] = useState(1600);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Scroll to top when switching samples
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
    }
  }, [selectedIndex]);

  const handleIframeLoad = useCallback((e: React.SyntheticEvent<HTMLIFrameElement>) => {
    const iframe = e.currentTarget;
    try {
      const doc = iframe.contentDocument || iframe.contentWindow?.document;
      if (doc?.body) {
        const height = doc.body.scrollHeight;
        setIframeHeight(height + 50); // Add small buffer
      }
    } catch (error) {
      // Fallback if content access fails
      setIframeHeight(1600);
    }
  }, []);

  const clientData = clientId ? clientDemos[clientId.toLowerCase()] : null;

  if (!clientData) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-2">Demo Not Found</h1>
          <p className="text-muted-foreground">The requested demo gallery does not exist.</p>
        </div>
      </div>
    );
  }

  const currentNewsletter = clientData.newsletters[selectedIndex];
  const totalSamples = clientData.newsletters.length;

  const goToPrevious = () => {
    setSelectedIndex((prev) => (prev === 0 ? totalSamples - 1 : prev - 1));
  };

  const goToNext = () => {
    setSelectedIndex((prev) => (prev === totalSamples - 1 ? 0 : prev + 1));
  };

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <header className="bg-background border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-bold text-foreground">{clientData.clientName}</h1>
              <p className="text-sm text-muted-foreground">Newsletter Gallery</p>
            </div>
            <div className="flex items-center gap-2">
              {/* Gallery Toggle */}
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowGallery(!showGallery)}
                className={cn(showGallery && "bg-primary text-primary-foreground")}
              >
                <Grid className="h-4 w-4 mr-1" />
                Gallery
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        {showGallery ? (
          /* Gallery View */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clientData.newsletters.map((newsletter, index) => (
              <Card
                key={newsletter.id}
                className={cn(
                  "cursor-pointer transition-all hover:shadow-lg",
                  selectedIndex === index && "ring-2 ring-primary"
                )}
                onClick={() => {
                  setSelectedIndex(index);
                  setShowGallery(false);
                }}
              >
                <CardContent className="p-0">
                  <div className="p-4 flex items-start justify-between border-b border-border">
                    <div>
                      <h3 className="font-semibold text-foreground">{newsletter.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{newsletter.description}</p>
                    </div>
                    <span className="shrink-0 w-7 h-7 rounded-full bg-muted flex items-center justify-center text-sm font-medium text-muted-foreground">
                      {index + 1}
                    </span>
                  </div>
                  <div className="h-[500px] bg-muted/30 overflow-hidden">
                    <iframe
                      srcDoc={newsletter.htmlContent}
                      className="w-full pointer-events-none"
                      style={{ 
                        transform: "scale(0.4)", 
                        transformOrigin: "top left", 
                        width: "250%", 
                        height: "1250px"
                      }}
                      title={newsletter.title}
                    />
                  </div>
                  <div className="p-4 border-t border-border">
                    <Button 
                      className="w-full"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedIndex(index);
                        setShowGallery(false);
                      }}
                    >
                      View Full Template
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          /* Single Preview View */
          <div className="w-full flex flex-col h-[calc(100vh-120px)]">
            {/* Sticky Controls */}
            <div className="sticky top-0 bg-background z-10 pb-4">
              {/* All Samples Back Button */}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowGallery(true)}
                className="mb-3 -ml-2 text-muted-foreground hover:text-foreground"
              >
                <ChevronLeft className="h-4 w-4 mr-1" />
                All Samples
              </Button>

              {/* Header Row */}
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h1 className="text-xl font-bold text-foreground">{clientData.clientName} Newsletter Samples</h1>
                  <p className="text-sm text-muted-foreground">
                    Sample {selectedIndex + 1} of {totalSamples}: {currentNewsletter.title}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={goToPrevious}
                    className="h-8 w-8"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={goToNext}
                    className="h-8 w-8"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Sample Number Buttons */}
              <div className="flex flex-wrap gap-2 mb-3">
                {clientData.newsletters.map((_, index) => (
                  <Button
                    key={index}
                    variant={selectedIndex === index ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedIndex(index)}
                    className="text-sm"
                  >
                    Sample {index + 1}
                  </Button>
                ))}
              </div>

              {/* Desktop/Mobile Toggle */}
              <div className="flex items-center gap-2">
                <div className="flex items-center bg-muted rounded-md p-0.5">
                  <Button
                    variant="ghost"
                    size="sm"
                    className={cn(
                      "h-8 px-3 text-sm",
                      viewMode === "desktop" 
                        ? "bg-background text-foreground shadow-sm" 
                        : "hover:bg-background/50"
                    )}
                    onClick={() => setViewMode("desktop")}
                  >
                    <Monitor className="h-4 w-4 mr-1" />
                    Desktop
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className={cn(
                      "h-8 px-3 text-sm",
                      viewMode === "mobile" 
                        ? "bg-background text-foreground shadow-sm" 
                        : "hover:bg-background/50"
                    )}
                    onClick={() => setViewMode("mobile")}
                  >
                    <Smartphone className="h-4 w-4 mr-1" />
                    Mobile
                  </Button>
                </div>
              </div>
            </div>

            {/* Preview Frame - Scrollable */}
            <div ref={scrollContainerRef} className="flex-1 overflow-auto flex justify-center">
              <div
                className={cn(
                  "rounded-lg shadow-sm transition-all duration-300",
                  viewMode === "desktop" ? "w-full max-w-3xl" : "w-[375px]"
                )}
              >
                <iframe
                  srcDoc={currentNewsletter.htmlContent}
                  className="w-full border-0"
                  style={{ height: `${iframeHeight}px` }}
                  title={currentNewsletter.title}
                  onLoad={handleIframeLoad}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Demo;
