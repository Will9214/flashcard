
type propTypes  = {
  path: string;
  children: JSX.Element;
}

function Route({path, children}: propTypes) {
  return window.location.pathname === path ? children: null
};

export default Route;