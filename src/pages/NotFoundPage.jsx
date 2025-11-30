const NotFoundPage = () => {
  return (
    <div className="px-2 lg:px-0 lg:pr-15">
      <div className="dark:bg-darkGray bg-mediumGray flex h-[80dvh] items-center justify-center rounded-2xl">
        <div className="flex items-center gap-4 text-xl">
          <p className="text-3xl">404</p>
          <div className="h-8 w-0.5 dark:bg-white"></div>
          <p>This page could not be found.</p>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
