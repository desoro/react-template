import { ControlsProvider } from 'utils/controls';

export default function Providers(props: any) {
  return (
    <ControlsProvider>
      {props.children}
    </ControlsProvider>
  );
}