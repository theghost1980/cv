//TODO as per future use or documentation when needed.
// this data can be used as a simple state management in any app.
export interface AppData {
  user: string;
}

export interface DataContextType {
  data: AppData;
  setContextData: (data: AppData) => void;
}
