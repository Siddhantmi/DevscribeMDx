export const Prose: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <div suppressHydrationWarning className="max-w-none prose prose-a:text-pink-600 dark:prose-invert">
      {children}
    </div>
  );
};