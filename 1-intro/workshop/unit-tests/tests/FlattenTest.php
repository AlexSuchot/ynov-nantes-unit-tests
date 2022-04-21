<?php

use PHPUnit\Framework\TestCase;

require_once('./src/flatten.php');

class FlattenTest extends TestCase
{
    public function testValueIsNotArray()
    {
        $this->expectError(TypeError::class);
        flatten("string");
    }

    public function testnull()
    {
        $this->assertEquals(flatten([]), []);
    }

    public function testvalue()
    {
        $this->assertEquals(flatten([-3]), [-3]);
    }

    public function test__nested()
    {
        $this->assertEquals(flatten([1, [2], [3, [4]], 5]), [1, 2, 3, 4, 5]);
    }
}
