from marshmallow import Schema, fields
# add rose

class RoseSchema(Schema):
   title = fields.String(required=True, error_messages={"required": "Rose Title is required."})
   description = fields.String(required=True, validate=fields.Length(min=2, max=500), error_messages={
      "required": "Rose description is required."
      })
   image = fields.String(required=True, error_messages={"required": "Rose image is required."})

# update rose

# instance
rose_schema = RoseSchema()