SELECT
  types.typeID,
  types.typeName,
  attributeTypes.attributeID,
  attributeTypes.attributeName
FROM invTypes AS types
INNER JOIN invGroups AS groups
  ON groups.groupID = types.groupID
INNER JOIN dgmTypeAttributes AS typeAttributes
  ON typeAttributes.typeID = types.typeID
INNER JOIN dgmAttributeTypes AS attributeTypes
  ON attributeTypes.attributeID = typeAttributes.attributeID
WHERE groups.categoryID = 6
  AND attributeTypes.attributeID IN (109, 110, 111, 113, 267, 268, 269, 270, 271, 272 ,273, 274)
ORDER BY types.typeID ASC, attributeTypes.attributeID