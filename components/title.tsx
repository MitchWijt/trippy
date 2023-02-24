type TitleProps = {
  title: string;
  fontSize: number;
  className: string;
}

export function Title(props: TitleProps) {
  return (
      <h1 className={props.className} style={{fontSize: props.fontSize}}>{props.title}</h1>
  )
}