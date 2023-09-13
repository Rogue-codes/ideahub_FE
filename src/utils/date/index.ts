import format from 'date-fns/format';

export const formatDate = (date: Date | null) => {
    return date ? format(date, 'yyyy-MM-dd') : '';
  };


export function formatTime (time : string) : string{
  const splitted = time.split(":");
  return `${splitted[0]}:${splitted[1]}`
}