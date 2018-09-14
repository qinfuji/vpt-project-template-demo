import * as React from 'react';
import PropTypes from 'prop-types';
import { LinkButton, AButton, Button } from './elements';

function ButtonComponent({
  small = false,
  style = {},
  ...props
}) {
  const newStyle = { ...style,
    ...(small ? {
      padding: '0.5em 0.7em',
      fontSize: '0.875em'
    } : {
      padding: '0.65em 2.25em'
    })
  };
  ButtonComponent.propTypes = {
    small: PropTypes.bool,
    to: PropTypes.string,
    href: PropTypes.string,
    style: PropTypes.any
  }; // Link

  if (props.to) {
    return <LinkButton style={newStyle} {...props} />;
  }

  if (props.href) {
    return <AButton style={newStyle} {...props} />;
  }

  return <Button style={newStyle} {...props} />;
}

export default ButtonComponent;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NsaWVudC9jb21tb24vY29tcG9uZW50cy9CdXR0b24vaW5kZXguanMiXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJMaW5rQnV0dG9uIiwiQUJ1dHRvbiIsIkJ1dHRvbiIsIkJ1dHRvbkNvbXBvbmVudCIsInNtYWxsIiwic3R5bGUiLCJwcm9wcyIsIm5ld1N0eWxlIiwicGFkZGluZyIsImZvbnRTaXplIiwicHJvcFR5cGVzIiwiYm9vbCIsInRvIiwic3RyaW5nIiwiaHJlZiIsImFueSJdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxLQUFLQSxLQUFaLE1BQXVCLE9BQXZCO0FBQ0EsT0FBT0MsU0FBUCxNQUFzQixZQUF0QjtBQUNBLFNBQVNDLFVBQVQsRUFBcUJDLE9BQXJCLEVBQThCQyxNQUE5QixRQUE0QyxZQUE1Qzs7QUFFQSxTQUFTQyxlQUFULENBQXlCO0FBQUVDLEVBQUFBLEtBQUssR0FBRyxLQUFWO0FBQWlCQyxFQUFBQSxLQUFLLEdBQUcsRUFBekI7QUFBNkIsS0FBR0M7QUFBaEMsQ0FBekIsRUFBa0U7QUFDaEUsUUFBTUMsUUFBUSxHQUFHLEVBQ2YsR0FBR0YsS0FEWTtBQUVmLFFBQUlELEtBQUssR0FDTDtBQUNFSSxNQUFBQSxPQUFPLEVBQUUsYUFEWDtBQUVFQyxNQUFBQSxRQUFRLEVBQUU7QUFGWixLQURLLEdBS0w7QUFDRUQsTUFBQUEsT0FBTyxFQUFFO0FBRFgsS0FMSjtBQUZlLEdBQWpCO0FBWUFMLEVBQUFBLGVBQWUsQ0FBQ08sU0FBaEIsR0FBNEI7QUFDMUJOLElBQUFBLEtBQUssRUFBRUwsU0FBUyxDQUFDWSxJQURTO0FBRTFCQyxJQUFBQSxFQUFFLEVBQUViLFNBQVMsQ0FBQ2MsTUFGWTtBQUcxQkMsSUFBQUEsSUFBSSxFQUFFZixTQUFTLENBQUNjLE1BSFU7QUFJMUJSLElBQUFBLEtBQUssRUFBRU4sU0FBUyxDQUFDZ0I7QUFKUyxHQUE1QixDQWJnRSxDQW9CaEU7O0FBQ0EsTUFBSVQsS0FBSyxDQUFDTSxFQUFWLEVBQWM7QUFDWixXQUFPLENBQUMsVUFBRCxDQUFZLE1BQU0sQ0FBQ0wsUUFBRCxDQUFsQixDQUE2QixJQUFJRCxLQUFKLENBQTdCLEdBQVA7QUFDRDs7QUFFRCxNQUFJQSxLQUFLLENBQUNRLElBQVYsRUFBZ0I7QUFDZCxXQUFPLENBQUMsT0FBRCxDQUFTLE1BQU0sQ0FBQ1AsUUFBRCxDQUFmLENBQTBCLElBQUlELEtBQUosQ0FBMUIsR0FBUDtBQUNEOztBQUVELFNBQU8sQ0FBQyxNQUFELENBQVEsTUFBTSxDQUFDQyxRQUFELENBQWQsQ0FBeUIsSUFBSUQsS0FBSixDQUF6QixHQUFQO0FBQ0Q7O0FBRUQsZUFBZUgsZUFBZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBMaW5rQnV0dG9uLCBBQnV0dG9uLCBCdXR0b24gfSBmcm9tICcuL2VsZW1lbnRzJztcblxuZnVuY3Rpb24gQnV0dG9uQ29tcG9uZW50KHsgc21hbGwgPSBmYWxzZSwgc3R5bGUgPSB7fSwgLi4ucHJvcHMgfSkge1xuICBjb25zdCBuZXdTdHlsZSA9IHtcbiAgICAuLi5zdHlsZSxcbiAgICAuLi4oc21hbGxcbiAgICAgID8ge1xuICAgICAgICAgIHBhZGRpbmc6ICcwLjVlbSAwLjdlbScsXG4gICAgICAgICAgZm9udFNpemU6ICcwLjg3NWVtJyxcbiAgICAgICAgfVxuICAgICAgOiB7XG4gICAgICAgICAgcGFkZGluZzogJzAuNjVlbSAyLjI1ZW0nLFxuICAgICAgICB9KSxcbiAgfTtcblxuICBCdXR0b25Db21wb25lbnQucHJvcFR5cGVzID0ge1xuICAgIHNtYWxsOiBQcm9wVHlwZXMuYm9vbCxcbiAgICB0bzogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBocmVmOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHN0eWxlOiBQcm9wVHlwZXMuYW55LFxuICB9O1xuXG4gIC8vIExpbmtcbiAgaWYgKHByb3BzLnRvKSB7XG4gICAgcmV0dXJuIDxMaW5rQnV0dG9uIHN0eWxlPXtuZXdTdHlsZX0gey4uLnByb3BzfSAvPjtcbiAgfVxuXG4gIGlmIChwcm9wcy5ocmVmKSB7XG4gICAgcmV0dXJuIDxBQnV0dG9uIHN0eWxlPXtuZXdTdHlsZX0gey4uLnByb3BzfSAvPjtcbiAgfVxuXG4gIHJldHVybiA8QnV0dG9uIHN0eWxlPXtuZXdTdHlsZX0gey4uLnByb3BzfSAvPjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uQ29tcG9uZW50O1xuIl19