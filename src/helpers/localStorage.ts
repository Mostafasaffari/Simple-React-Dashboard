type LocalStorageType = "local" | "session" | "index";

interface IStorage {
  get: (name: string) => string | null;
  set: (name: string, value: string) => void;
}
const Storage = (type: LocalStorageType = "local"): IStorage => {
  return {
    get: (name: string) => {
      switch (type) {
        case "local":
          return localStorage.getItem(name);
        case "session":
          return null; //TODO: implement later
        case "index":
          return null; //TODO: implement later
        default:
          throw Error("Storage type not found");
      }
    },
    set: (name: string, value: string) => {
      switch (type) {
        case "local":
          localStorage.setItem(name, value);
          break;
        case "session":
          break; //TODO: implement later
        case "index":
          break; //TODO: implement later
        default:
          throw Error("Storage type not found");
      }
    }
  };
};

export default Storage;
