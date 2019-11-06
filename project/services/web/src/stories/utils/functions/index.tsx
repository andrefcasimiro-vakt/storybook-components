
type RC<P> = React.SFC<P> | React.ComponentClass<P> | React.FunctionComponent<P> | React.ComponentType<P> | any

type HOC<O, P> = (C: RC<O>) => RC<P>

export function compose <P>(C: RC<P>, ...hocs: HOC<any, any>[]): RC<P> {
  return hocs.reduce((g, f) => f(g), C);
}
