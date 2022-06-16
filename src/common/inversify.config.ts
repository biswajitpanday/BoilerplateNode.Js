import { Container } from "inversify";

const container = new Container();
// container.bind<SomeRepository>(TYPES.SomeRepository).to(SomeRepository).inSingletonScope();

export default container;