# Chicken Facts API

Chicken facts provides a JSON API with limited functionality.

## Version 1 API

The API serves a chicken fact in JSON format.

The end point is `/api/v1`

### Retrieve a Fact

To retrieve a fact, you need to know the `ID` of the fact. In this example, let's say we want to retrieve fact `31`.

`GET /api/v1/facts/31.json`

You'll receive this response:

```
{
  "id": 31,
  "fact": "A chicken’s heart beats from 220 to 360 times per second.",
  "source": "https://www.thefactsite.com/chicken-facts/",
  "published": "2019-06-02"
}
```

### Pagination

Pagination for multiple requests is a WIP and is not complete yet. You can follow [this issue](https://github.com/aaronsaray/chickenfacts.io/issues/1) to keep informed.
