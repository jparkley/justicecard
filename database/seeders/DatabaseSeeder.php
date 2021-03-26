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
        \App\Models\User::factory()->create([
            'name' => 'Jin SoL',
            'email' => 'parkleydondon@yahoo.com',
            'password' => \bcrypt('wjtmRkdchs0)'),
        ]);

        //\App\Models\JusticeCard::factory(2)->create();


        DB::table('justice_cards')->insert([
            [
                'title' => "Thousands stay home",
                'subtitle' => "Myanmar anti-coup activists plan new street protests after paralysing strike",                
                'img_url' => "https://api.time.com/wp-content/uploads/2021/03/myanmar-facebook-tatmadaw.jpg?w=800&quality=85",
                'country' => "myanmar",                
                'description' => "Pro-democracy activists are urging others to stay home and not patronize any businesses for the day, a new tactic devised to avoid the military’s increasingly deadly response to the daily demonstrations, which have taken place non-stop since de facto leader Aung San Suu Kyi and other high-ranking members of the civilian government were removed from power and detained by the military on February 1. ",

                'user_id' => 1                
            ],
            [
                'title' => 'Pro-democracy ',
                'subtitle' => "Myanmar's silent strike against military power",
                'img_url' => 'https://www.voanews.com/s3/files/styles/892x501/s3/2021-03/ap_myanmar_strike.jpg?itok=iBwKcbLb',  
                'country' => "myanmar",                  
                'description' => "Anti-coup protests and strikes have since gripped the nation but are being violently suppressed by the junta's police forces and military soldiers, with widespread reports of shootings, enforced disappearances and torture of political prisoners.",
                'user_id' => 1     
            ],
            [
                'title' => 'Resistance toward Justice',
                'subtitle' => "Myanmar's silent strike against military power",
                'img_url' => 'https://cdn.vox-cdn.com/thumbor/gZGo1isiNW1rlmngXT5ZYcjz7os=/0x0:2998x2000/920x613/filters:focal(1260x761:1738x1239):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/68779777/1300658954.0.jpg',  
                'country' => "myanmar",                  
                'description' => "Anti-coup protests and strikes have since gripped the nation but are being violently suppressed by the junta's police forces and military soldiers, with widespread reports of shootings, enforced disappearances and torture of political prisoners.",
                'user_id' => 1                   
            ],
        ]);
    }
}
