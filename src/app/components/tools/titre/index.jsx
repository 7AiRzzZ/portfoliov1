const Titre = ({className,children}) => {
  return (
    <div className={`mx-2 my-4 flex items-center justify-center text-center border-black backdrop-blur-sm bg-black/10 dark:border-white border-x-2 border-y-2 text-2xl rounded-full ${className}`}>
      {children}
    </div>
  );
};

export default Titre;