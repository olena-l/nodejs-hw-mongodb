const parseType = (contactType) => {
  if ( typeof contactType !== "string" ) return;
  const isContactType = (contactType) =>
    ['work', 'home', 'personal'].includes(contactType);

  if (isContactType(contactType)) return contactType;
};

const parseBoolean = (boolean) => {
  const isBoolean = typeof boolean === 'string';

  if (!isBoolean) return;

  if (boolean === 'true') {
    return true;
  }

  return false;
};

export const parseFilterParams = (query) => {
  const { type, isFavourite } = query;

  const parsedType = parseType(type);
  const parsedIsFavourite = parseBoolean(isFavourite);

  return {
    type: parsedType,
    isFavourite: parsedIsFavourite,
  };
};
