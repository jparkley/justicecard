<?php

namespace Database\Factories;

use App\Models\JusticeCard;
use Illuminate\Database\Eloquent\Factories\Factory;

class JusticeCardFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = JusticeCard::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        // return [
        //     'title' => $this->faker->words,
        //     'subtitle' => $this->faker->words,
        //     'url' => $this->faker->url,
        //     'img_url' => $this->faker->url,
        //     'user_id' => 1,
        //     'description' => $this->faker->sentences,
        // ];
    } 
}

