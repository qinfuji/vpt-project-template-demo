import { injectGlobal } from 'styled-components';
import 'react-tippy/dist/tippy.css';
import { Tooltip, withTooltip } from 'react-tippy';
import theme from '../../utils/theme'; // eslint-disable-next-line

injectGlobal`
  .tippy-popper {
    position: absolute;
  }

  .tippy-popper,
  .tippy-popper * {
    pointer-events: none;
  }

  .tippy-tooltip [x-circle] {
    background-color: rgb(21, 24, 25) !important;
  }

  .tippy-tooltip.update-theme {
    .arrow-regular {
      border-bottom: 7px solid ${theme.green()} !important;
    }

    background-color: ${theme.green()};
    border-radius: 2px;
    padding: 0 !important;
  }
`;
export default Tooltip;
export { withTooltip };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NsaWVudC9jb21tb24vY29tcG9uZW50cy9Ub29sdGlwL1Rvb2x0aXAuanMiXSwibmFtZXMiOlsiaW5qZWN0R2xvYmFsIiwiVG9vbHRpcCIsIndpdGhUb29sdGlwIiwidGhlbWUiLCJncmVlbiJdLCJtYXBwaW5ncyI6IkFBQUEsU0FBU0EsWUFBVCxRQUE2QixtQkFBN0I7QUFDQSxPQUFPLDRCQUFQO0FBQ0EsU0FBU0MsT0FBVCxFQUFrQkMsV0FBbEIsUUFBcUMsYUFBckM7QUFDQSxPQUFPQyxLQUFQLE1BQWtCLG1CQUFsQixDLENBRUE7O0FBQ0FILFlBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7aUNBZ0JvQkcsS0FBSyxDQUFDQyxLQUFOLEVBQWM7Ozt3QkFHdkJELEtBQUssQ0FBQ0MsS0FBTixFQUFjOzs7O0NBbkJ0QztBQXlCQSxlQUFlSCxPQUFmO0FBQ0EsU0FBU0MsV0FBVCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluamVjdEdsb2JhbCB9IGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCAncmVhY3QtdGlwcHkvZGlzdC90aXBweS5jc3MnO1xuaW1wb3J0IHsgVG9vbHRpcCwgd2l0aFRvb2x0aXAgfSBmcm9tICdyZWFjdC10aXBweSc7XG5pbXBvcnQgdGhlbWUgZnJvbSAnLi4vLi4vdXRpbHMvdGhlbWUnO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbmluamVjdEdsb2JhbGBcbiAgLnRpcHB5LXBvcHBlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICB9XG5cbiAgLnRpcHB5LXBvcHBlcixcbiAgLnRpcHB5LXBvcHBlciAqIHtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgfVxuXG4gIC50aXBweS10b29sdGlwIFt4LWNpcmNsZV0ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMSwgMjQsIDI1KSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLnRpcHB5LXRvb2x0aXAudXBkYXRlLXRoZW1lIHtcbiAgICAuYXJyb3ctcmVndWxhciB7XG4gICAgICBib3JkZXItYm90dG9tOiA3cHggc29saWQgJHt0aGVtZS5ncmVlbigpfSAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWUuZ3JlZW4oKX07XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgVG9vbHRpcDtcbmV4cG9ydCB7IHdpdGhUb29sdGlwIH07XG4iXX0=