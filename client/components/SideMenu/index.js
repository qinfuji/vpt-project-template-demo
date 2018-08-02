import React from 'react';
import PropTypes from 'prop-types';
import withEdit from './edit/withEdit';
//import classnames from 'classnames';

class SideMenu extends React.Component {
  sideMenuItem(menuItems) {
    return (
      <ul className="d-menu" style={{ display: 'block' }}>
        {menuItems.map(menuItem => {
          return (
            <li key={menuItem.id}>
              <a href={menuItem.url}>{menuItem.title}</a>

              {menuItem.children &&
                menuItem.children.length &&
                this.sideMenuItem(menuItem.children)}
            </li>
          );
        })}
      </ul>
    );
  }

  render() {
    let { menus } = this.props;
    if (!menus) {
      return null;
    }
    let _menu = menus.map(menu => {
      return (
        <li className="active" key={menu.id}>
          <a
            href={menu.url}
            className="dropdown-toggle active-toggle active-control"
          >
            <span className="mif-home icon" />
            {menu.title}
          </a>

          {menu.children &&
            menu.children.length > 0 &&
            this.sideMenuItem(menu.children)}
        </li>
      );
    });

    return <ul className="sidenav-m3">{_menu}</ul>;
  }
}

SideMenu.propTypes = {
  onClick: PropTypes.func,
  menus: PropTypes.arrayOf(
    PropTypes.shape({
      /**id */
      id: PropTypes.string.isRequired,
      /**名称 */
      name: PropTypes.string.isRequired,
      /**显示标题 */
      title: PropTypes.string.isRequired,
      /**目标URL */
      url: PropTypes.string,
      /**图标 */
      iconName: PropTypes.string,
      /**是否选中 */
      isActive: PropTypes.bool,

      children: PropTypes.shape({
        /**id */
        id: PropTypes.string.isRequired,
        /**名称 */
        name: PropTypes.string.isRequired,
        /**显示标题 */
        title: PropTypes.string.isRequired,
        /**目标URL */
        url: PropTypes.string,
        /**图标 */
        iconName: PropTypes.string,
        /**是否选中 */
        isActive: PropTypes.bool,
      }),
    })
  ).isRequired,
  styles: {},
  className: {},
};

export default withEdit()(SideMenu);
