const BlogLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <header>
        <h1>Blog</h1>
      </header>
      <main>{children}</main>
      <footer>
        <p>&copy; 2023 Your Company</p>
      </footer>
    </div>
  );
};

export default BlogLayout;
