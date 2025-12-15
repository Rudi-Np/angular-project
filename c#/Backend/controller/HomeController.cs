using Microsoft.AspNetCore.Mvc;
using Backend.Data;
using Backend.Models;
using Backend.Services;
using Microsoft.EntityFrameworkCore;

namespace Backend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class HomeController : ControllerBase
{
    private readonly AppDbContext _context;
    private readonly GovernmentApiService _govService;

    public HomeController(AppDbContext context, GovernmentApiService govService)
    {
        _context = context;
        _govService = govService;
    }

   
   [HttpGet("GetApiAndSave")]
public async Task<IActionResult> GetApiAndSave()
{
    var apiData = await _govService.GetGaragesAsync();

    foreach (var item in apiData)
    {
        int misparMosah = item.GetProperty("mispar_mosah").GetInt32();

        if (!await _context.Garages.AnyAsync(g => g.MisparMosah == misparMosah))
        {
            var garage = new Garage
            {
                MisparMosah = item.GetProperty("mispar_mosah").GetInt32(),
    ShemMosah   = item.GetProperty("shem_mosah").GetString() ?? "",

    CodSugMosah = 0,
    SugMosah    = item.GetProperty("sug_mosah").GetString() ?? "",

    Ktovet      = "",
    Yishuv      = item.GetProperty("yishuv").GetString() ?? "",
    Telephone   = item.GetProperty("telephone").GetString() ?? "",
    Mikud       = 0,

    CodMiktzoa  = 0,
    Miktzoa     = item.GetProperty("miktzoa").GetString() ?? "",
    MenahelMiktzoa = "",
    RashamHavarot  = 0
            };

            _context.Garages.Add(garage);
        }
    }

    await _context.SaveChangesAsync();
    return Ok(await _context.Garages.ToListAsync());
}



    
    [HttpPost("Add")]
    public async Task<IActionResult> Add([FromBody] List<Garage> garages)
    {
        foreach (var g in garages)
        {
            if (!await _context.Garages.AnyAsync(x => x.MisparMosah == g.MisparMosah))
            {
                _context.Garages.Add(g);
            }
        }

        await _context.SaveChangesAsync();
        return Ok();
    }
}
