using System.Text.Json;

namespace Backend.Services;

public class GovernmentApiService
{
    private readonly HttpClient _httpClient;

    public GovernmentApiService(HttpClient httpClient)
    {
        _httpClient = httpClient;
    }

    public async Task<List<JsonElement>> GetGaragesAsync()
    {
       var response = await _httpClient.GetAsync("https://data.gov.il/api/3/action/datastore_search" +
            "?resource_id=bb68386a-a331-4bbc-b668-bba2766d517d&limit=5");
        response.EnsureSuccessStatusCode();

        var json = await response.Content.ReadAsStringAsync();

        using var doc = JsonDocument.Parse(json);

        var records = doc.RootElement
            .GetProperty("result")
            .GetProperty("records");

        return records
            .EnumerateArray()
            .Select(e => e.Clone())
            .ToList();
    }
}
