import { useState, useCallback, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Monitor, Smartphone, Expand, Grid, ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import Header from "@/components/Header";
import { useIsMobile } from "@/hooks/use-mobile";

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
        title: "Content Digest & Media Links",
        description: "Curated articles with podcast and social media promotion",
        htmlContent: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Heart Health Digest - ClearCardio Newsletter</title>
</head>
<body style="margin: 0; padding: 0;">
<div style="margin:0;padding:0;background-color:#f8fafc;font-family:system-ui, -apple-system, sans-serif"><div style="display:none;max-height:0;overflow:hidden;font-size:1px;line-height:1px;color:#f8fafc">Your weekly heart health digest: articles, podcast episodes, and expert insights.</div><table border="0" cellPadding="0" cellSpacing="0" width="100%" style="background-color:#f8fafc"><tbody><tr><td align="center" style="padding:30px 0"><table border="0" cellPadding="0" cellSpacing="0" width="600" class="wrapper" style="background-color:#ffffff;border-radius:8px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,0.08);max-width:100%"><tbody><tr><td align="center" style="padding:25px;background-color:#0f172a"><a href="https://clearcardio.com" target="_blank" rel="noopener noreferrer"><img src="/images/clearcardio-logo.png" alt="ClearCardio" width="180" style="display:block;border:0;max-width:100%"/></a></td></tr><tr><td style="background-color:#b91c1c;padding:30px;text-align:center"><h1 class="mobile-header" style="color:#ffffff;font-size:28px;font-weight:700;margin:0;letter-spacing:-0.02em">Heart Health Digest</h1><p style="color:#fecaca;font-size:14px;margin:10px 0 0 0">Your Weekly Guide to Cardiovascular Wellness</p></td></tr><tr><td class="mobile-padding" style="padding:35px 40px"><p style="color:#334155;font-size:16px;line-height:26px;margin:0 0 25px 0">Hi there,</p><p style="color:#334155;font-size:16px;line-height:26px;margin:0 0 30px 0">Welcome to this week's digest! We've curated the latest insights on heart health, prevention strategies, and expert advice to keep you informed.</p><table border="0" cellPadding="0" cellSpacing="0" width="100%" style="margin-bottom:35px"><tbody><tr><td style="border-bottom:2px solid #e2e8f0;padding-bottom:10px"><h2 style="color:#0f172a;font-size:20px;font-weight:700;margin:0">Featured Articles</h2></td></tr></tbody></table><table border="0" cellPadding="0" cellSpacing="0" width="100%" style="margin-bottom:25px"><tbody><tr><td style="background-color:#f1f5f9;padding:25px;border-radius:8px;border-left:4px solid #b91c1c"><h3 style="color:#0f172a;font-size:18px;font-weight:700;margin:0 0 10px 0">Understanding Soft Plaque: The Silent Killer</h3><p style="color:#64748b;font-size:14px;line-height:22px;margin:0 0 15px 0">Learn why soft plaque is more dangerous than calcified plaque and how modern imaging detects it before symptoms appear.</p><a href="https://clearcardio.com/blog/soft-plaque" style="color:#b91c1c;font-size:14px;font-weight:600;text-decoration:none">Read Article →</a></td></tr></tbody></table><table border="0" cellPadding="0" cellSpacing="0" width="100%" style="margin-bottom:25px"><tbody><tr><td style="background-color:#f1f5f9;padding:25px;border-radius:8px;border-left:4px solid #0ea5e9"><h3 style="color:#0f172a;font-size:18px;font-weight:700;margin:0 0 10px 0">5 Lifestyle Changes That Actually Reduce Heart Risk</h3><p style="color:#64748b;font-size:14px;line-height:22px;margin:0 0 15px 0">Evidence-based strategies backed by decades of research. Simple changes that make a real difference.</p><a href="https://clearcardio.com/blog/lifestyle-changes" style="color:#0ea5e9;font-size:14px;font-weight:600;text-decoration:none">Read Article →</a></td></tr></tbody></table><table border="0" cellPadding="0" cellSpacing="0" width="100%" style="margin-bottom:25px"><tbody><tr><td style="background-color:#f1f5f9;padding:25px;border-radius:8px;border-left:4px solid #10b981"><h3 style="color:#0f172a;font-size:18px;font-weight:700;margin:0 0 10px 0">AI in Cardiology: How Technology Saves Lives</h3><p style="color:#64748b;font-size:14px;line-height:22px;margin:0 0 15px 0">Discover how artificial intelligence is revolutionizing heart disease detection and treatment planning.</p><a href="https://clearcardio.com/blog/ai-cardiology" style="color:#10b981;font-size:14px;font-weight:600;text-decoration:none">Read Article →</a></td></tr></tbody></table><table border="0" cellPadding="0" cellSpacing="0" width="100%" style="margin:40px 0 35px 0"><tbody><tr><td style="border-bottom:2px solid #e2e8f0;padding-bottom:10px"><h2 style="color:#0f172a;font-size:20px;font-weight:700;margin:0">Latest Podcast Episodes</h2></td></tr></tbody></table><table border="0" cellPadding="0" cellSpacing="0" width="100%" style="margin-bottom:20px"><tbody><tr><td style="background-color:#fef3c7;padding:20px;border-radius:8px"><table border="0" cellPadding="0" cellSpacing="0" width="100%"><tbody><tr><td width="60" style="vertical-align:top;padding-right:15px"><div style="width:50px;height:50px;background-color:#f59e0b;border-radius:8px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:24px;text-align:center;line-height:50px">▶</div></td><td><h4 style="color:#92400e;font-size:16px;font-weight:700;margin:0 0 5px 0">EP 47: Prevention vs Treatment</h4><p style="color:#78350f;font-size:13px;margin:0 0 10px 0">Dr. Osborne discusses why prevention is always better than treatment</p><a href="https://clearcardio.com/podcast/ep47" style="color:#b45309;font-size:13px;font-weight:600;text-decoration:none">Listen Now →</a></td></tr></tbody></table></td></tr></tbody></table><table border="0" cellPadding="0" cellSpacing="0" width="100%" style="margin-bottom:20px"><tbody><tr><td style="background-color:#fef3c7;padding:20px;border-radius:8px"><table border="0" cellPadding="0" cellSpacing="0" width="100%"><tbody><tr><td width="60" style="vertical-align:top;padding-right:15px"><div style="width:50px;height:50px;background-color:#f59e0b;border-radius:8px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:24px;text-align:center;line-height:50px">▶</div></td><td><h4 style="color:#92400e;font-size:16px;font-weight:700;margin:0 0 5px 0">EP 46: Understanding Your CT Scan Results</h4><p style="color:#78350f;font-size:13px;margin:0 0 10px 0">A deep dive into interpreting CCTA results and what they mean for you</p><a href="https://clearcardio.com/podcast/ep46" style="color:#b45309;font-size:13px;font-weight:600;text-decoration:none">Listen Now →</a></td></tr></tbody></table></td></tr></tbody></table><table border="0" cellPadding="0" cellSpacing="0" width="100%" style="margin:40px 0 35px 0"><tbody><tr><td style="border-bottom:2px solid #e2e8f0;padding-bottom:10px"><h2 style="color:#0f172a;font-size:20px;font-weight:700;margin:0">Latest Videos</h2></td></tr></tbody></table><table border="0" cellPadding="0" cellSpacing="0" width="100%" style="margin-bottom:20px"><tbody><tr><td style="padding:15px;border-radius:8px;border:1px solid #e2e8f0"><a href="https://www.youtube.com/watch?v=z19wSl-gjQQ" style="text-decoration:none;display:block"><img src="https://img.youtube.com/vi/z19wSl-gjQQ/hqdefault.jpg" alt="Watch Video" width="100%" style="border-radius:6px;display:block;border:0;margin-bottom:12px"/></a><h4 style="color:#0f172a;font-size:15px;font-weight:700;margin:0 0 6px 0">Heart Health Insights</h4><p style="color:#64748b;font-size:13px;line-height:18px;margin:0 0 8px 0">Expert insights on cardiovascular wellness and prevention</p><a href="https://www.youtube.com/watch?v=z19wSl-gjQQ" style="color:#b91c1c;font-size:13px;font-weight:600;text-decoration:none">Watch Now →</a></td></tr></tbody></table><table border="0" cellPadding="0" cellSpacing="0" width="100%" style="margin-bottom:20px"><tbody><tr><td style="padding:15px;border-radius:8px;border:1px solid #e2e8f0"><a href="https://www.youtube.com/watch?v=H5b-QpOqAy0" style="text-decoration:none;display:block"><img src="https://img.youtube.com/vi/H5b-QpOqAy0/hqdefault.jpg" alt="Watch Video" width="100%" style="border-radius:6px;display:block;border:0;margin-bottom:12px"/></a><h4 style="color:#0f172a;font-size:15px;font-weight:700;margin:0 0 6px 0">Understanding Your Heart Risk</h4><p style="color:#64748b;font-size:13px;line-height:18px;margin:0 0 8px 0">Dr. Osborne explains cardiac risk assessment and prevention strategies</p><a href="https://www.youtube.com/watch?v=H5b-QpOqAy0" style="color:#b91c1c;font-size:13px;font-weight:600;text-decoration:none">Watch Now →</a></td></tr></tbody></table><table border="0" cellPadding="0" cellSpacing="0" width="100%" style="margin:40px 0 15px 0"><tbody><tr><td style="border-bottom:2px solid #e2e8f0;padding-bottom:10px"><h2 style="color:#0f172a;font-size:20px;font-weight:700;margin:0">Follow Us</h2></td></tr></tbody></table><table border="0" cellPadding="0" cellSpacing="0" width="100%"><tbody><tr><td style="padding:10px 0;text-align:center"><a href="https://youtube.com/@clearcardio" style="color:#64748b;font-size:14px;text-decoration:none;display:inline-flex;align-items:center"><span style="display:inline-block;width:28px;height:28px;background-color:#ff0000;border-radius:4px;text-align:center;line-height:28px;color:#fff;font-size:14px;margin-right:10px">▶</span> YouTube @clearcardio</a></td></tr></tbody></table><table border="0" cellPadding="0" cellSpacing="0" width="100%" style="margin-top:40px"><tbody><tr><td style="background-color:#0f172a;padding:30px;border-radius:8px;text-align:center"><h3 style="color:#ffffff;font-size:20px;font-weight:700;margin:0 0 10px 0">Ready to Know Your Heart Health?</h3><p style="color:#94a3b8;font-size:14px;margin:0 0 20px 0">Schedule your comprehensive cardiac assessment today.</p><a href="https://clearcardio.com" style="background-color:#b91c1c;color:#ffffff;padding:14px 30px;text-decoration:none;font-weight:700;font-size:14px;border-radius:6px;display:inline-block">Book Your Consultation</a></td></tr></tbody></table></td></tr><tr><td style="background-color:#f1f5f9;padding:25px;text-align:center;border-top:1px solid #e2e8f0"><p style="color:#0f172a;font-size:14px;font-weight:600;margin:0 0 5px 0">ClearCardio</p><p style="color:#64748b;font-size:12px;margin:0 0 10px 0">Advanced Cardiac Imaging & Prevention</p><p style="color:#94a3b8;font-size:11px;margin:0">© 2025 ClearCardio. All rights reserved. | <a href="#" style="color:#94a3b8;text-decoration:underline">Unsubscribe</a></p></td></tr></tbody></table></td></tr></tbody></table><style>
        @media only screen and (max-width: 600px) {
          .wrapper { width: 100% !important; max-width: 100% !important; }
          .mobile-padding { padding: 25px 20px !important; }
          .mobile-header { font-size: 24px !important; line-height: 30px !important; }
          table td[style*="padding:0 10px"] { display: block !important; padding: 5px 0 !important; }
        }
      </style></div>
</body>
</html>`,
      },
      {
        id: "6",
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
    ],
  },
  harikthompsoncpas: {
    clientName: "HarikThompson CPAs",
    brandColor: "#1a4a6e",
    newsletters: [
      {
        id: "1",
        title: "Newsletter Prototype",
        description: "Trump Accounts, RMD, Fire Loss",
        htmlContent: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Kevin Thompson, CPAs and Advisors Newsletter</title>
  <style>
    body, table, td, p, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
    body { margin: 0; padding: 0; width: 100% !important; }
    @media screen and (max-width: 600px) {
      .container { width: 100% !important; }
      .content-padding { padding-left: 20px !important; padding-right: 20px !important; }
    }
  </style>
</head>
<body style="margin: 0; padding: 0; background-color: #f5f3ef; font-family: Georgia, Times, serif;">
  <div style="display: none; max-height: 0; overflow: hidden;">Trump Tax Accounts Update - Your monthly tax and financial insights</div>
  <table cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color: #f5f3ef;">
    <tr><td align="center" style="padding: 20px;">
      <table cellpadding="0" cellspacing="0" border="0" width="600" class="container" style="background-color: #ffffff; max-width: 100%;">
        <!-- Header with Logo -->
        <tr><td style="background-color: #ffffff; padding: 30px 40px; text-align: center;">
          <img src="/images/ht-logo-stacked-sm.jpg" alt="Harik Thompson CPAs and Advisors" style="max-width: 250px; display: block; margin: 0 auto;" />
        </td></tr>
        <!-- Contact Bar -->
        <tr><td style="background-color: #1a4a6e; padding: 12px 40px; text-align: center;">
          <p style="color: #ffffff; margin: 0; font-size: 13px; font-family: Arial, sans-serif;">
            <a href="mailto:kthompson@harikthompsoncpas.com" style="color: #ffffff; text-decoration: none;">kthompson@harikthompsoncpas.com</a> | 
            <a href="tel:3103789911" style="color: #ffffff; text-decoration: none;">(310) 378-9911</a> | 
            <a href="https://www.harikthompsoncpas.com/" style="color: #ffffff; text-decoration: none;">Visit Website</a>
          </p>
        </td></tr>
        <!-- Headlines with Links -->
        <tr><td style="padding: 30px 40px;">
          <h2 style="color: #1a4a6e; font-size: 20px; font-weight: bold; margin-bottom: 20px; border-bottom: 2px solid #86C733; padding-bottom: 10px;">Featured</h2>
          <div style="margin-bottom: 15px;">
            <a href="/example/harikthompsoncpas/blog/trump-accounts" style="text-decoration: none;"><h3 style="color: #1a4a6e; font-size: 16px; font-weight: bold; margin: 0 0 5px 0; text-decoration: underline;">Trump Tax Accounts Update</h3></a>
            <p style="color: #4a5568; font-size: 14px; margin: 0; line-height: 1.5;">New guidance on retirement savings vehicles may impact your 2026 tax planning strategy.</p>
          </div>
          <div style="margin-bottom: 15px;">
            <a href="/example/harikthompsoncpas/blog/rmd-inherited-ira" style="text-decoration: none;"><h3 style="color: #1a4a6e; font-size: 16px; font-weight: bold; margin: 0 0 5px 0; text-decoration: underline;">RMD Rules for Inherited IRAs</h3></a>
            <p style="color: #4a5568; font-size: 14px; margin: 0; line-height: 1.5;">SECURE Act 2.0 brings major changes to required minimum distributions for beneficiaries.</p>
          </div>
          <div style="margin-bottom: 15px;">
            <a href="/example/harikthompsoncpas/blog/wildfire-casualty-loss" style="text-decoration: none;"><h3 style="color: #1a4a6e; font-size: 16px; font-weight: bold; margin: 0 0 5px 0; text-decoration: underline;">Wildfire Personal Casualty Loss</h3></a>
            <p style="color: #4a5568; font-size: 14px; margin: 0; line-height: 1.5;">Important tax relief provisions available for those affected by recent California wildfires.</p>
          </div>
        </td></tr>
        <!-- Soft CTA -->
        <tr><td style="background-color: #f0f7e6; padding: 20px 40px; text-align: center;">
          <p style="color: #1a4a6e; font-size: 14px; margin: 0;">
            Have questions about these updates? <a href="https://www.harikthompsoncpas.com/contact.html" style="color: #86C733; font-weight: bold; text-decoration: underline;">Let's talk</a>
          </p>
        </td></tr>
        <!-- Divider -->
        <tr><td style="padding: 0 40px;"><hr style="border: none; border-top: 1px solid #d4e8c0; margin: 0;" /></td></tr>
        <!-- Story -->
        <tr><td style="padding: 30px 40px;">
          <h2 style="color: #1a4a6e; font-size: 20px; font-weight: bold; margin-bottom: 20px; border-bottom: 2px solid #86C733; padding-bottom: 10px;">Real-World Scenario</h2>
          <h3 style="color: #1a4a6e; font-size: 22px; font-weight: bold; margin-bottom: 15px;">The $47,000 Mistake Sarah Almost Made</h3>
          <p style="color: #2d3748; font-size: 15px; line-height: 1.7; margin-bottom: 15px;">Sarah inherited her father's IRA in 2022. At 45, she thought she had decades before worrying about withdrawals. Wrong.</p>
          <p style="color: #2d3748; font-size: 15px; line-height: 1.7; margin-bottom: 15px;">Under the new SECURE Act rules, most non-spouse beneficiaries must now empty inherited IRAs within 10 years. But here's what caught Sarah off guard: she also needs to take annual RMDs during those 10 years.</p>
          <p style="color: #2d3748; font-size: 15px; line-height: 1.7; margin-bottom: 15px;">Sarah came to us in January, panicked. She'd missed her 2024 RMD entirely—a 25% penalty on the amount she should have withdrawn.</p>
          <p style="color: #2d3748; font-size: 15px; line-height: 1.7; margin-bottom: 15px;">We acted fast. Using the IRS's new reasonable error waiver, we helped Sarah request penalty relief. We then created a 10-year withdrawal strategy that minimizes her tax burden while meeting all requirements.</p>
          <p style="color: #2d3748; font-size: 15px; line-height: 1.7; margin-bottom: 15px;">The result? Sarah avoided the penalty and now has a clear roadmap. She's withdrawing in her lower-income years before retirement, saving an estimated $47,000 in taxes over the decade.</p>
          <p style="color: #2d3748; font-size: 15px; line-height: 1.7; font-weight: bold;">Don't let inherited IRA rules catch you off guard. The 10-year clock is ticking.</p>
        </td></tr>
        <!-- Key Insights -->
        <tr><td style="padding: 30px 40px;">
          <h2 style="color: #1a4a6e; font-size: 20px; font-weight: bold; margin-bottom: 20px; border-bottom: 2px solid #86C733; padding-bottom: 10px;">Key Insights</h2>
          <table cellpadding="0" cellspacing="0" border="0" width="100%" style="margin-bottom: 10px;">
            <tr>
              <td style="width: 4px; background-color: #86C733;"></td>
              <td style="background-color: #f5f3ef; padding: 20px 25px;">
                <p style="color: #2d3748; font-size: 14px; margin: 0; line-height: 1.6;">Non-spouse beneficiaries must empty inherited IRAs within 10 years under SECURE Act rules—AND take annual RMDs during that period.</p>
              </td>
            </tr>
          </table>
          <table cellpadding="0" cellspacing="0" border="0" width="100%" style="margin-bottom: 10px;">
            <tr>
              <td style="width: 4px; background-color: #86C733;"></td>
              <td style="background-color: #f5f3ef; padding: 20px 25px;">
                <p style="color: #2d3748; font-size: 14px; margin: 0; line-height: 1.6;">Missing an RMD triggers a 25% penalty, but the IRS may waive it for reasonable errors if you act quickly.</p>
              </td>
            </tr>
          </table>
          <table cellpadding="0" cellspacing="0" border="0" width="100%" style="margin-bottom: 10px;">
            <tr>
              <td style="width: 4px; background-color: #86C733;"></td>
              <td style="background-color: #f5f3ef; padding: 20px 25px;">
                <p style="color: #2d3748; font-size: 14px; margin: 0; line-height: 1.6;">Strategic withdrawal timing can save tens of thousands in taxes—consider pulling more in lower-income years.</p>
              </td>
            </tr>
          </table>
        </td></tr>
        <!-- Action Steps -->
        <tr><td style="padding: 30px 40px;">
          <h2 style="color: #1a4a6e; font-size: 20px; font-weight: bold; margin-bottom: 20px; border-bottom: 2px solid #86C733; padding-bottom: 10px;">Your Action Steps</h2>
          <table cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 15px; width: 100%;">
            <tr>
              <td style="width: 43px; vertical-align: top;">
                <div style="background-color: #1a4a6e; color: #ffffff; width: 28px; height: 28px; border-radius: 50%; text-align: center; line-height: 28px; font-size: 14px; font-weight: bold; font-family: Arial, sans-serif;">1</div>
              </td>
              <td style="vertical-align: top;">
                <p style="color: #2d3748; font-size: 14px; line-height: 1.6; margin: 0;">Review any inherited IRAs you hold and confirm your 10-year deadline date. Mark your calendar for the final distribution year.</p>
              </td>
            </tr>
          </table>
          <table cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 15px; width: 100%;">
            <tr>
              <td style="width: 43px; vertical-align: top;">
                <div style="background-color: #1a4a6e; color: #ffffff; width: 28px; height: 28px; border-radius: 50%; text-align: center; line-height: 28px; font-size: 14px; font-weight: bold; font-family: Arial, sans-serif;">2</div>
              </td>
              <td style="vertical-align: top;">
                <p style="color: #2d3748; font-size: 14px; line-height: 1.6; margin: 0;">Calculate your required annual RMD using IRS life expectancy tables. Ensure this year's withdrawal is scheduled before December 31st.</p>
              </td>
            </tr>
          </table>
          <table cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 15px; width: 100%;">
            <tr>
              <td style="width: 43px; vertical-align: top;">
                <div style="background-color: #1a4a6e; color: #ffffff; width: 28px; height: 28px; border-radius: 50%; text-align: center; line-height: 28px; font-size: 14px; font-weight: bold; font-family: Arial, sans-serif;">3</div>
              </td>
              <td style="vertical-align: top;">
                <p style="color: #2d3748; font-size: 14px; line-height: 1.6; margin: 0;">Schedule a tax planning session to create a 10-year withdrawal strategy optimized for your income situation and tax brackets.</p>
              </td>
            </tr>
          </table>
        </td></tr>
        <!-- Soft CTA 2 -->
        <tr><td style="background-color: #f0f7e6; padding: 20px 40px; text-align: center;">
          <p style="color: #1a4a6e; font-size: 14px; margin: 0;">
            Need help with your specific situation? <a href="https://www.harikthompsoncpas.com/contact.html" style="color: #86C733; font-weight: bold; text-decoration: underline;">Schedule a quick call</a>
          </p>
        </td></tr>
        <!-- Humor Section with Pug Meme -->
        <tr><td style="background-color: #f5f3ef; padding: 30px 40px; text-align: center;">
          <div style="background-color: #ffffff; padding: 20px; border-radius: 8px; border: 2px dashed #86C733; text-align: center;">
            <img src="/images/pug-meme.jpg" alt="Pug tax meme - When you do your taxes alone vs when HarikThompson takes care of it" style="max-width: 100%; height: auto; border-radius: 6px;" />
          </div>
        </td></tr>
        <!-- CTA Section -->
        <tr><td style="padding: 40px; text-align: center; background-color: #1a4a6e;">
          <p style="color: #ffffff; font-size: 18px; margin: 0 0 20px 0;">Ready to protect your retirement?</p>
          <a href="https://www.harikthompsoncpas.com/contact.html" style="background-color: #86C733; color: #1a4a6e; padding: 15px 35px; font-size: 16px; font-weight: bold; text-decoration: none; border-radius: 5px; display: inline-block; font-family: Arial, sans-serif;">Book Your Tax Savings Strategy Session →</a>
        </td></tr>
        <!-- Footer with Feedback + Social -->
        <tr><td style="background-color: #2d3748; padding: 30px 40px; text-align: center;">
          <!-- Feedback -->
          <div style="margin-bottom: 20px;">
            <p style="color: #a0aec0; font-size: 14px; margin: 0 0 10px 0;">Was this info helpful?</p>
            <div style="display: inline-block;">
              <a href="#" style="background-color: transparent; border: 1px solid #4a5568; color: #a0aec0; padding: 8px 20px; margin: 0 5px; font-size: 14px; text-decoration: none; border-radius: 5px; display: inline-block;">Yes</a>
              <a href="#" style="background-color: transparent; border: 1px solid #4a5568; color: #a0aec0; padding: 8px 20px; margin: 0 5px; font-size: 14px; text-decoration: none; border-radius: 5px; display: inline-block;">No</a>
            </div>
          </div>
          <!-- Social Icons -->
          <div style="margin-bottom: 20px;">
            <a href="#" style="display: inline-block; width: 35px; height: 35px; background-color: #4a5568; border-radius: 50%; margin: 0 5px; line-height: 35px; color: #ffffff; text-decoration: none; font-size: 14px;">f</a>
            <a href="#" style="display: inline-block; width: 35px; height: 35px; background-color: #4a5568; border-radius: 50%; margin: 0 5px; line-height: 35px; color: #ffffff; text-decoration: none; font-size: 14px;">in</a>
            <a href="#" style="display: inline-block; width: 35px; height: 35px; background-color: #4a5568; border-radius: 50%; margin: 0 5px; line-height: 35px; color: #ffffff; text-decoration: none; font-size: 14px;">X</a>
          </div>
          <!-- Disclaimer -->
          <p style="color: #718096; font-size: 11px; line-height: 1.5; margin: 0 0 15px 0;">This newsletter is for informational purposes only and does not constitute tax, legal, or financial advice. Please consult with a qualified professional regarding your specific situation.</p>
          <!-- Unsubscribe -->
          <p style="color: #a0aec0; font-size: 12px; margin: 0;">
            <a href="#" style="color: #a0aec0;">Unsubscribe</a> | 
            <a href="#" style="color: #a0aec0;">Update Preferences</a>
          </p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`,
      },
    ],
  },
};

const Example = () => {
  const { clientId } = useParams<{ clientId: string }>();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [viewMode, setViewMode] = useState<"desktop" | "mobile">("desktop");
  const [showGallery, setShowGallery] = useState(true);
  const [iframeHeight, setIframeHeight] = useState(1600);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Scroll to top when switching samples
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = 0;
    }
  }, [selectedIndex]);

  const getDisabledLinksHtml = useCallback((html: string) => {
    const disableLinksStyle = `<style>a, button { pointer-events: none !important; cursor: default !important; } a:hover, button:hover { text-decoration: none !important; }</style>`;
    if (html.includes('</head>')) {
      return html.replace('</head>', `${disableLinksStyle}</head>`);
    }
    return disableLinksStyle + html;
  }, []);

  const getClickableLinksHtml = useCallback((html: string) => {
    const clickableStyle = `<style>a { cursor: pointer !important; } a:hover { opacity: 0.85; }</style>`;
    const baseTag = `<base target="_top" />`;
    if (html.includes('</head>')) {
      return html.replace('</head>', `${baseTag}${clickableStyle}</head>`);
    }
    return baseTag + clickableStyle + html;
  }, []);

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
      <Header />
      
      {/* Client Info Bar */}
      <div className="pt-16">
        <div className="bg-sky-50 border-b border-sky-100">
          <div className="container mx-auto px-4 py-4">
            <h1 className="text-xl font-bold text-foreground">
              {showGallery 
                ? `${clientData.clientName} Newsletter Samples`
                : `Sample ${selectedIndex + 1}: ${currentNewsletter.title}`
              }
            </h1>
          </div>
        </div>
      </div>

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
                      srcDoc={getDisabledLinksHtml(newsletter.htmlContent)}
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
                      View Sample {index + 1}
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
              {/* Gallery + Sample Selection + Desktop/Mobile Toggle */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <div className="flex flex-wrap items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setShowGallery(true)}
                    className="text-sm"
                  >
                    <Grid className="h-4 w-4 mr-1" />
                    Gallery
                  </Button>
                  
                  {/* Sample dropdown on mobile, buttons on desktop */}
                  <div className="md:hidden">
                    <Select
                      value={selectedIndex.toString()}
                      onValueChange={(value) => setSelectedIndex(parseInt(value))}
                    >
                      <SelectTrigger className="w-[130px] h-9 text-sm bg-background">
                        <SelectValue placeholder="Select sample" />
                      </SelectTrigger>
                      <SelectContent className="bg-background border border-border shadow-lg z-50">
                        {clientData.newsletters.map((_, index) => (
                          <SelectItem key={index} value={index.toString()}>
                            Sample {index + 1}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  {/* Sample buttons - desktop only */}
                  <div className="hidden md:flex items-center gap-2">
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
                </div>

                {/* Desktop/Mobile Toggle - hidden on mobile devices */}
                <div className="hidden md:flex items-center bg-muted rounded-md p-0.5">
                  <Button
                    variant="ghost"
                    size="sm"
                    className={cn(
                      "h-8 px-3 text-sm",
                      viewMode === "desktop" 
                        ? "bg-primary text-primary-foreground shadow-sm hover:bg-primary/90" 
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
                        ? "bg-primary text-primary-foreground shadow-sm hover:bg-primary/90" 
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

            {/* Preview Frame */}
            <div className="flex-1 overflow-hidden">
              <div ref={scrollContainerRef} className="h-full overflow-auto flex justify-center">
                <div
                  className={cn(
                    "rounded-lg shadow-sm transition-all duration-300",
                    "w-full md:max-w-3xl",
                    viewMode === "mobile" && "md:w-[420px]"
                  )}
                >
                  <iframe
                    srcDoc={getClickableLinksHtml(currentNewsletter.htmlContent)}
                    className="w-full border-0"
                    style={{ height: `${iframeHeight}px` }}
                    title={currentNewsletter.title}
                    onLoad={handleIframeLoad}
                    sandbox="allow-same-origin allow-popups allow-top-navigation"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Example;
