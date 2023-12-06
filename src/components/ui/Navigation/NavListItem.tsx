interface NavListItemProps {
  children: React.ReactNode;
}
const NavListItem = ({ children }: NavListItemProps) => {
  return <li className="px-4 py-2">{children}</li>;
};

export default NavListItem;
