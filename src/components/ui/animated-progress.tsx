import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { cn } from '@/lib/utils';

interface AnimatedProgressProps {
  value: number;
  label: string;
  color?: string;
  delay?: number;
  className?: string;
}

const AnimatedProgress = ({
  value,
  label,
  color = "bg-primary",
  delay = 0,
  className
}: AnimatedProgressProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className={cn("space-y-2", className)}>
      <div className="flex justify-between text-sm">
        <span className="font-medium">{label}</span>
        <span className="text-muted-foreground">{value}%</span>
      </div>
      <div className="h-3 bg-muted rounded-full overflow-hidden">
        <motion.div
          className={cn("h-full rounded-full", color)}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${value}%` } : { width: 0 }}
          transition={{
            duration: 1.5,
            delay,
            ease: "easeOut"
          }}
        />
      </div>
    </div>
  );
};

export default AnimatedProgress;