import { AppRoute } from '../consts';
import { Link } from 'react-router-dom';
function NotFound(): JSX.Element {
  return (
    <div className="error" style={{textAlign: 'center'}}>
      <h2>404 Not Found</h2>
      <p>The page you were looking for doesn&apos;t exist</p>
      <Link to={AppRoute.Main} style={{fontSize:'20px', textDecoration:'underline', color:'#1f6adb'}}>Go home</Link>
    </div>
  );
}
export default NotFound;
