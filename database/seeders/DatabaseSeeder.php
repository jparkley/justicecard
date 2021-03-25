<?php

namespace Database\Seeders;

use App\Models\JusticeCard;
use Illuminate\Support\Str;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
        // \App\Models\User::factory()->create([
        //     'name' => 'Jin SoL',
        //     'email' => 'parkleydondon@yahoo.com',
        //     'password' => \bcrypt('wjtmRkdchs0)'),
        // ]);

        //\App\Models\JusticeCard::factory(2)->create();

            DB::table('justice_cards')->insert([
                'title' => Str::random(10),
                'subtitle' => Str::random(10),
                'description' => Str::random(100),
                'url' => 'https://www.google.com',
                'user_id' => 1
            ]);

            DB::table('justice_cards')->insert([
                'title' => 'Resistance toward Justice',
                'subtitle' => "Myanmar's silent strike against military power",
                'description' => "Anti-coup protests and strikes have since gripped the nation but are being violently suppressed by the junta's police forces and military soldiers, with widespread reports of shootings, enforced disappearances and torture of political prisoners.",
                'url' => 'https://www.cnn.com',
                'user_id' => 1                
            ]);
    }

}
