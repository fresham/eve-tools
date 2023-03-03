SELECT
  types.typeID,
  types.groupID,
  types.typeName
FROM invTypes AS types
INNER JOIN invGroups AS groups
  ON groups.groupID = types.groupID
INNER JOIN dgmTypeAttributes AS typeAttributes
  ON typeAttributes.typeID = types.typeID
WHERE groups.categoryID = 6
GROUP BY types.typeID
ORDER BY types.typeID ASC