interface CardProps {
    className?: string;
    children: React.ReactNode;
  }
  
  export function Card({ className = "", children }: CardProps) {
    return (
      <div className={`rounded-lg border bg-card p-6 shadow-sm ${className}`}>
        {children}
      </div>
    );
  }