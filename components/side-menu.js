const SideMenu = ({ appName, categories }) => (
  <>
    <h1 className="my-4">{appName}</h1>
    <div className="list-group">
      {categories.map((category) => (
        <a key={category.id} href="#" className="list-group-item">
          {category.name}
        </a>
      ))}
    </div>
  </>
);

export default SideMenu;
