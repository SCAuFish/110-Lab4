package edu.ucsd.cs110.temperature;
public class Celsius extends Temperature
{
    public Celsius(float t)
    {
        super(t);
    }

    @Override
    public Temperature toCelsius() {
        return new Celsius(super.getValue());
    }

    @Override
    public Temperature toFahrenheit() {
        return new Fahrenheit(super.getValue() * 9 / 5 + 32);
    }

    public String toString()
    {
        // TODO: Complete this method
        return super.getValue() + " C";
    }
}
