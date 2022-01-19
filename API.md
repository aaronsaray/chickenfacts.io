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
  "fact": "A chicken’s heart beats from 220 to 360 times per minute.",
  "source": "https://www.thefactsite.com/chicken-facts/",
  "published": "2019-06-02"
}
```

### Get The Count

In order to retrieve a count of the facts available, you can hit this end point:

`GET /api/v1/facts.json`

You'll receive a response like this:

```
{
  "count": 36,
  "last_counted": "2019-06-03"
}
```

### Pagination

Pagination is offered with some simple defaults.  The results are offered 10 facts per page.  You can choose to sort by ID ascending or descending.

To get page 2 in ascending or descending, you can try these two requests:

`GET /ap/vi/facts/order/id/asc/page/2.json`

`GET /ap/vi/facts/order/id/desc/page/2.json`

You'll receive a response like this:

```
{
  "facts": [
    { 
        "id": 11, 
        "fact": "In Gainesville, Florida, you have to eat fried chicken with your bare hands. Eating it by any other method is illegal.", 
        "source": "https://www.thefactsite.com/chicken-facts/", 
        "published": "2019-06-02" 
    },
    { 
        "id": 12, 
        "fact": "A hen has to eat about four pounds of feed to make one dozen eggs.", 
        "source": "https://www.thefactsite.com/chicken-facts/", 
        "published": "2019-06-02" 
    }
    // snippppppy
    { 
        "id": 20, 
        "fact": "Americans consume 8 billion chickens per year which is more chicken than beef; at 80 pounds of chicken per capita compared to 63 pounds of beef per capita.", 
        "source": "https://www.thefactsite.com/chicken-facts/", 
        "published": "2019-06-02" 
    }
  ],
  "next": "/api/v1/facts/order/id/asc/page/3.json",
  "prev": "/api/v1/facts/order/id/asc/page/1.json"
}
```

You will know that there are more results by the presence of the `next` URL - or by doing math based on the number of records available from the `facts.json` endpoint.
