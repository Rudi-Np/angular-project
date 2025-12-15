using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Backend.Migrations
{
    /// <inheritdoc />
    public partial class FixIntStringMismatch : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "CodMiktzoa",
                table: "Garages",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "Ktovet",
                table: "Garages",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "MenahelMiktzoa",
                table: "Garages",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Mikud",
                table: "Garages",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "RashamHavarot",
                table: "Garages",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CodMiktzoa",
                table: "Garages");

            migrationBuilder.DropColumn(
                name: "Ktovet",
                table: "Garages");

            migrationBuilder.DropColumn(
                name: "MenahelMiktzoa",
                table: "Garages");

            migrationBuilder.DropColumn(
                name: "Mikud",
                table: "Garages");

            migrationBuilder.DropColumn(
                name: "RashamHavarot",
                table: "Garages");
        }
    }
}
