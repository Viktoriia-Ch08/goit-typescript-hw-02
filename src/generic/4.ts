interface PageTitle {
  title: string,
}
class Component<T> {
  constructor (public props:T) {

  }
}

class Page extends Component<PageTitle> {
  pageInfo () {
    console.log(this.props.title);
  }
}

export {};