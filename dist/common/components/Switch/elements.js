import styled from 'styled-components';

const getColor = ({
  right,
  offMode,
  secondary,
  theme
}) => {
  if (right) {
    return secondary ? theme.templateColor || theme.secondary : theme.primary;
  }

  if (offMode) return `rgba(0, 0, 0, 0.3)`;
  return secondary ? theme.primary : theme.templateColor || theme.secondary;
};

export const Container = styled.div`
  transition: 0.3s ease all;
  position: relative;
  background-color: ${getColor};
  width: ${({
  small
}) => small ? 3 : 3.5}rem;
  color: rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 0.5rem;
  height: ${props => props.small ? 20 : 26}px;
  box-sizing: border-box;
  cursor: pointer;
  border-radius: 4px;

  &:before,
  &:after {
    position: absolute;
    top: 50%;
    margin-top: -0.5em;
    line-height: 1;
  }
`;

const getSize = ({
  small
}) => small ? 'calc(1.5rem + 2px)' : 'calc(2rem + 2px)';

export const Dot = styled.div`
  transition: inherit;
  position: absolute;
  height: ${props => props.small ? 14 : 20}px;
  width: 1rem;
  left: 0.1rem;
  border-radius: 4px;
  transform: translateX(${props => props.right ? getSize(props) : '0'});
  top: 0.1rem;
  background-color: white;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
`;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NsaWVudC9jb21tb24vY29tcG9uZW50cy9Td2l0Y2gvZWxlbWVudHMuanMiXSwibmFtZXMiOlsic3R5bGVkIiwiZ2V0Q29sb3IiLCJyaWdodCIsIm9mZk1vZGUiLCJzZWNvbmRhcnkiLCJ0aGVtZSIsInRlbXBsYXRlQ29sb3IiLCJwcmltYXJ5IiwiQ29udGFpbmVyIiwiZGl2Iiwic21hbGwiLCJwcm9wcyIsImdldFNpemUiLCJEb3QiXSwibWFwcGluZ3MiOiJBQUFBLE9BQU9BLE1BQVAsTUFBbUIsbUJBQW5COztBQUVBLE1BQU1DLFFBQVEsR0FBRyxDQUFDO0FBQUVDLEVBQUFBLEtBQUY7QUFBU0MsRUFBQUEsT0FBVDtBQUFrQkMsRUFBQUEsU0FBbEI7QUFBNkJDLEVBQUFBO0FBQTdCLENBQUQsS0FBMEM7QUFDekQsTUFBSUgsS0FBSixFQUFXO0FBQ1QsV0FBT0UsU0FBUyxHQUFHQyxLQUFLLENBQUNDLGFBQU4sSUFBdUJELEtBQUssQ0FBQ0QsU0FBaEMsR0FBNENDLEtBQUssQ0FBQ0UsT0FBbEU7QUFDRDs7QUFDRCxNQUFJSixPQUFKLEVBQWEsT0FBUSxvQkFBUjtBQUNiLFNBQU9DLFNBQVMsR0FBR0MsS0FBSyxDQUFDRSxPQUFULEdBQW1CRixLQUFLLENBQUNDLGFBQU4sSUFBdUJELEtBQUssQ0FBQ0QsU0FBaEU7QUFDRCxDQU5EOztBQVFBLE9BQU8sTUFBTUksU0FBUyxHQUFHUixNQUFNLENBQUNTLEdBQUk7OztzQkFHZFIsUUFBUztXQUNwQixDQUFDO0FBQUVTLEVBQUFBO0FBQUYsQ0FBRCxLQUFnQkEsS0FBSyxHQUFHLENBQUgsR0FBTyxHQUFLOzs7O1lBSWhDQyxLQUFLLElBQUtBLEtBQUssQ0FBQ0QsS0FBTixHQUFjLEVBQWQsR0FBbUIsRUFBSTs7Ozs7Ozs7Ozs7O0NBUnRDOztBQXNCUCxNQUFNRSxPQUFPLEdBQUcsQ0FBQztBQUFFRixFQUFBQTtBQUFGLENBQUQsS0FDZEEsS0FBSyxHQUFHLG9CQUFILEdBQTBCLGtCQURqQzs7QUFHQSxPQUFPLE1BQU1HLEdBQUcsR0FBR2IsTUFBTSxDQUFDUyxHQUFJOzs7WUFHbEJFLEtBQUssSUFBS0EsS0FBSyxDQUFDRCxLQUFOLEdBQWMsRUFBZCxHQUFtQixFQUFJOzs7OzBCQUluQkMsS0FBSyxJQUFLQSxLQUFLLENBQUNULEtBQU4sR0FBY1UsT0FBTyxDQUFDRCxLQUFELENBQXJCLEdBQStCLEdBQUs7Ozs7Q0FQakUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuY29uc3QgZ2V0Q29sb3IgPSAoeyByaWdodCwgb2ZmTW9kZSwgc2Vjb25kYXJ5LCB0aGVtZSB9KSA9PiB7XG4gIGlmIChyaWdodCkge1xuICAgIHJldHVybiBzZWNvbmRhcnkgPyB0aGVtZS50ZW1wbGF0ZUNvbG9yIHx8IHRoZW1lLnNlY29uZGFyeSA6IHRoZW1lLnByaW1hcnk7XG4gIH1cbiAgaWYgKG9mZk1vZGUpIHJldHVybiBgcmdiYSgwLCAwLCAwLCAwLjMpYDtcbiAgcmV0dXJuIHNlY29uZGFyeSA/IHRoZW1lLnByaW1hcnkgOiB0aGVtZS50ZW1wbGF0ZUNvbG9yIHx8IHRoZW1lLnNlY29uZGFyeTtcbn07XG5cbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICB0cmFuc2l0aW9uOiAwLjNzIGVhc2UgYWxsO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICR7Z2V0Q29sb3J9O1xuICB3aWR0aDogJHsoeyBzbWFsbCB9KSA9PiAoc21hbGwgPyAzIDogMy41KX1yZW07XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgcGFkZGluZzogMC41cmVtO1xuICBoZWlnaHQ6ICR7cHJvcHMgPT4gKHByb3BzLnNtYWxsID8gMjAgOiAyNil9cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuXG4gICY6YmVmb3JlLFxuICAmOmFmdGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbWFyZ2luLXRvcDogLTAuNWVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xuICB9XG5gO1xuXG5jb25zdCBnZXRTaXplID0gKHsgc21hbGwgfSkgPT5cbiAgc21hbGwgPyAnY2FsYygxLjVyZW0gKyAycHgpJyA6ICdjYWxjKDJyZW0gKyAycHgpJztcblxuZXhwb3J0IGNvbnN0IERvdCA9IHN0eWxlZC5kaXZgXG4gIHRyYW5zaXRpb246IGluaGVyaXQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAke3Byb3BzID0+IChwcm9wcy5zbWFsbCA/IDE0IDogMjApfXB4O1xuICB3aWR0aDogMXJlbTtcbiAgbGVmdDogMC4xcmVtO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgke3Byb3BzID0+IChwcm9wcy5yaWdodCA/IGdldFNpemUocHJvcHMpIDogJzAnKX0pO1xuICB0b3A6IDAuMXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJveC1zaGFkb3c6IDAgMCA0cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuYDtcbiJdfQ==