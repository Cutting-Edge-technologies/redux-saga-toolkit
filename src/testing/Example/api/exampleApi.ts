// The actual Domain types live in common/types/domain
export interface IExampleDomainType {
  message: string;
  count: number;
}

export const defaultExampleMessage = 'I am example api responce';

export const exampleApiCall = async (count: number, message: string = defaultExampleMessage): Promise<IExampleDomainType> => {
  return {
    count,
    message,
  }
};
