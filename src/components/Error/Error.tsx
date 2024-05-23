import {useAppSelector} from '../../hooks';

function Error(): JSX.Element | null {
  const error = useAppSelector((state) => state.error);

  if (!error) {
    return null;
  }

  return <div>{error}</div>;
}

export default Error;
