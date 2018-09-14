export default function ({
  margin,
  top,
  right,
  left,
  bottom,
  horizontal,
  vertical
}) {
  const topMargin = [top, vertical, margin].find(s => s != null) || 0;
  const rightMargin = [right, horizontal, margin].find(s => s != null) || 0;
  const bottomMargin = [bottom, vertical, margin].find(s => s != null) || 0;
  const leftMargin = [left, horizontal, margin].find(s => s != null) || 0;
  return `${topMargin}rem ${rightMargin}rem ${bottomMargin}rem ${leftMargin}rem`;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2NsaWVudC9jb21tb24vY29tcG9uZW50cy9zcGFjaW5nL2dldC1zcGFjaW5nLmpzIl0sIm5hbWVzIjpbIm1hcmdpbiIsInRvcCIsInJpZ2h0IiwibGVmdCIsImJvdHRvbSIsImhvcml6b250YWwiLCJ2ZXJ0aWNhbCIsInRvcE1hcmdpbiIsImZpbmQiLCJzIiwicmlnaHRNYXJnaW4iLCJib3R0b21NYXJnaW4iLCJsZWZ0TWFyZ2luIl0sIm1hcHBpbmdzIjoiQUFBQSxlQUFlLFVBQVM7QUFDdEJBLEVBQUFBLE1BRHNCO0FBRXRCQyxFQUFBQSxHQUZzQjtBQUd0QkMsRUFBQUEsS0FIc0I7QUFJdEJDLEVBQUFBLElBSnNCO0FBS3RCQyxFQUFBQSxNQUxzQjtBQU10QkMsRUFBQUEsVUFOc0I7QUFPdEJDLEVBQUFBO0FBUHNCLENBQVQsRUFRWjtBQUNELFFBQU1DLFNBQVMsR0FBRyxDQUFDTixHQUFELEVBQU1LLFFBQU4sRUFBZ0JOLE1BQWhCLEVBQXdCUSxJQUF4QixDQUE2QkMsQ0FBQyxJQUFJQSxDQUFDLElBQUksSUFBdkMsS0FBZ0QsQ0FBbEU7QUFDQSxRQUFNQyxXQUFXLEdBQUcsQ0FBQ1IsS0FBRCxFQUFRRyxVQUFSLEVBQW9CTCxNQUFwQixFQUE0QlEsSUFBNUIsQ0FBaUNDLENBQUMsSUFBSUEsQ0FBQyxJQUFJLElBQTNDLEtBQW9ELENBQXhFO0FBQ0EsUUFBTUUsWUFBWSxHQUFHLENBQUNQLE1BQUQsRUFBU0UsUUFBVCxFQUFtQk4sTUFBbkIsRUFBMkJRLElBQTNCLENBQWdDQyxDQUFDLElBQUlBLENBQUMsSUFBSSxJQUExQyxLQUFtRCxDQUF4RTtBQUNBLFFBQU1HLFVBQVUsR0FBRyxDQUFDVCxJQUFELEVBQU9FLFVBQVAsRUFBbUJMLE1BQW5CLEVBQTJCUSxJQUEzQixDQUFnQ0MsQ0FBQyxJQUFJQSxDQUFDLElBQUksSUFBMUMsS0FBbUQsQ0FBdEU7QUFFQSxTQUFRLEdBQUVGLFNBQVUsT0FBTUcsV0FBWSxPQUFNQyxZQUFhLE9BQU1DLFVBQVcsS0FBMUU7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHtcbiAgbWFyZ2luLFxuICB0b3AsXG4gIHJpZ2h0LFxuICBsZWZ0LFxuICBib3R0b20sXG4gIGhvcml6b250YWwsXG4gIHZlcnRpY2FsLFxufSkge1xuICBjb25zdCB0b3BNYXJnaW4gPSBbdG9wLCB2ZXJ0aWNhbCwgbWFyZ2luXS5maW5kKHMgPT4gcyAhPSBudWxsKSB8fCAwO1xuICBjb25zdCByaWdodE1hcmdpbiA9IFtyaWdodCwgaG9yaXpvbnRhbCwgbWFyZ2luXS5maW5kKHMgPT4gcyAhPSBudWxsKSB8fCAwO1xuICBjb25zdCBib3R0b21NYXJnaW4gPSBbYm90dG9tLCB2ZXJ0aWNhbCwgbWFyZ2luXS5maW5kKHMgPT4gcyAhPSBudWxsKSB8fCAwO1xuICBjb25zdCBsZWZ0TWFyZ2luID0gW2xlZnQsIGhvcml6b250YWwsIG1hcmdpbl0uZmluZChzID0+IHMgIT0gbnVsbCkgfHwgMDtcblxuICByZXR1cm4gYCR7dG9wTWFyZ2lufXJlbSAke3JpZ2h0TWFyZ2lufXJlbSAke2JvdHRvbU1hcmdpbn1yZW0gJHtsZWZ0TWFyZ2lufXJlbWA7XG59XG4iXX0=