const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 bg-portfolio-bg flex items-center justify-center z-50">
      <div className="text-center">
        <div className="relative w-16 h-16 mx-auto mb-4">
          <div className="absolute inset-0 border-4 border-portfolio-accent/20 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-portfolio-accent border-t-transparent rounded-full animate-spin"></div>
        </div>
        <p className="text-portfolio-text-muted">Loading...</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;