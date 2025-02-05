import { useState, useEffect, useRef } from "react";
import { Menu, X, Home, Phone, CalendarFold, User2, Image, Bell, Mail, ChevronDown } from "lucide-react";
import logo from './Images/logo.png';
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setActiveDropdown(null); // Close any open dropdowns when toggling mobile menu
  };

  const toggleDropdown = (title: string, event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    setActiveDropdown(activeDropdown === title ? null : title);
  };

  const menuItems = [
    { title: "Home", path: "/", icon: <Home className="w-5 h-5" /> },
    {
      title: "Events",
      icon: <CalendarFold className="w-5 h-5" />,
      dropdownItems: [
        { title: "Industrial Visit", path: "/events/industrial-visit" },
        { title: "Educational Visit", path: "/events/educational-visit" },
        { title: "Invited Talk", path: "/events/invited-talk" },
        { title: "Workshops", path: "/events/workshops" },
        { title: "Other Events", path: "/events/other-events" }
      ]
    },
    {
      title: "Committee",
      icon: <User2 className="w-5 h-5" />,
      dropdownItems: [
        {
          title: "Students Chapter",
          subItems: [
            { title: "IIT Guwahati", path: "/committee/students-chapter/iit-guwahati" },
            { title: "Assam Engineering", path: "/committee/students-chapter/assam-engineering" }
          ]
        },
        { title: "Members", path: "/committee/members" }
      ]
    },
    { title: "Gallery", path: "/gallery", icon: <Image className="w-5 h-5" /> },
    { title: "Notice", path: "/notice", icon: <Bell className="w-5 h-5" /> },
    { title: "NewsLetters", path: "/newsletters", icon: <Mail className="w-5 h-5" /> },
    { title: "Contact", path: "/contact", icon: <Phone className="w-5 h-5" /> }
  ];

  const renderDropdownContent = (item: any) => {
    if (!item.dropdownItems) return null;

    return (
      <div className="absolute top-full left-0 w-48 py-2 bg-white rounded-md shadow-lg z-50">
        {item.dropdownItems.map((dropdownItem: any, index: number) => (
          dropdownItem.subItems ? (
            <div key={index} className="relative group">
              <button
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 flex justify-between w-full"
              >
                {dropdownItem.title} <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute left-full top-0 w-48 py-2 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {dropdownItem.subItems.map((subItem: any, subIndex: number) => (
                  <Link
                    key={subIndex}
                    to={subItem.path}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
                  >
                    {subItem.title}
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <Link
              key={index}
              to={dropdownItem.path}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
            >
              {dropdownItem.title}
            </Link>
          )
        ))}
      </div>
    );
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex-shrink-0 hover:cursor-pointer">
            <img src={logo} alt="Logo" className="h-10 w-auto" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:block" ref={dropdownRef}>
            <div className="ml-10 flex items-center space-x-4">
              {menuItems.map((item) => (
                <div key={item.title} className="relative">
                  {item.dropdownItems ? (
                    <button
                      className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-indigo-600 hover:bg-indigo-50"
                      onClick={(e) => toggleDropdown(item.title, e)}
                    >
                      {item.icon}
                      <span className="ml-2">{item.title}</span>
                      <ChevronDown className="ml-1 w-4 h-4 transform transition-transform duration-200" />
                    </button>
                  ) : (
                    <Link
                      to={item.path || "#"}
                      className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-indigo-600 hover:bg-indigo-50"
                    >
                      {item.icon}
                      <span className="ml-2">{item.title}</span>
                    </Link>
                  )}
                  {activeDropdown === item.title && renderDropdownContent(item)}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            >
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              <div key={item.title}>
                {item.dropdownItems ? (
                  <button
                    onClick={(e) => toggleDropdown(item.title, e)}
                    className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-indigo-50"
                  >
                    {item.icon}
                    <span className="ml-2">{item.title}</span>
                    <ChevronDown className="ml-auto w-4 h-4 transform transition-transform duration-200" />
                  </button>
                ) : (
                  <Link
                    to={item.path || "#"}
                    className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-indigo-50"
                  >
                    {item.icon}
                    <span className="ml-2">{item.title}</span>
                  </Link>
                )}
                {activeDropdown === item.title && item.dropdownItems && (
                  <div className="pl-6 mt-1 space-y-1">
                    {item.dropdownItems.map((dropdownItem: any, index: number) => (
                      dropdownItem.subItems ? (
                        <div key={index} className="space-y-1">
                          <div className="font-medium text-sm text-gray-900 py-2">
                            {dropdownItem.title}
                          </div>
                          {dropdownItem.subItems.map((subItem: any, subIndex: number) => (
                            <Link
                              key={subIndex}
                              to={subItem.path}
                              className="block py-2 pl-4 text-sm text-gray-700 hover:text-indigo-600"
                            >
                              {subItem.title}
                            </Link>
                          ))}
                        </div>
                      ) : (
                        <Link
                          key={index}
                          to={dropdownItem.path}
                          className="block py-2 pl-4 text-sm text-gray-700 hover:text-indigo-600"
                        >
                          {dropdownItem.title}
                        </Link>
                      )
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
