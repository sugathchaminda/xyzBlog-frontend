// eslint-disable-next-line @typescript-eslint/naming-convention
type voidFunction = (isSucess?: boolean) => void;
// eslint-disable-next-line @typescript-eslint/naming-convention
type messageFunction = (message?: string) => void;
type InputEvent = React.ChangeEvent<HTMLInputElement>;
type ButtonEvent = React.MouseEvent<HTMLButtonElement>;

enum IResponse {
  Success = 0,
  Failure = 1,
}
type ResponseHandler = (status: IResponse, message?: string) => void;
interface RouteComponentProps<
  Params extends { [K in keyof Params]?: string } = {},
  C extends StaticContext = StaticContext,
  S = H.LocationState,
> {
  history: H.History;
  location: H.Location<S>;
  match: match<Params>;
  staticContext?: C;
}
type Dispatch = any;

interface UrlParam {
  id: string;
}

interface Dict {
  [key: string]: any;
}

interface SelectItemsI {
  value: string;
  name: string;
}

interface ColumnI<T> {
  columnTitle?: string;
  renderFunction: (item: T) => JSX.Element;
}

interface TableConfigurationsI<T> {
  columns: Array<ColumnI<T>>;
}

/**
 * Encodes a text string as a valid component of a Uniform Resource Identifier (URI).
 * @param uriComponent A value representing an encoded URI component.
 */
declare function encodeURIComponent(
  uriComponent: string | number | boolean
): string;

declare module '*.png';
declare module '*.css';
declare module '*.svg';
declare module '*.ttf';
