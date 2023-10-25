export default function Label({
  children,
}: React.HTMLAttributes<HTMLLabelElement>) {
  return (
    <label className="inline-block text-lg text-gray-500 dark:text-slate-500">
      {children}
    </label>
  );
}
