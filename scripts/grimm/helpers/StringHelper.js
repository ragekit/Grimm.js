define([], function()
{

	StringHelper = {};

	StringHelper.areSimilar = function(str1, str2)
	{
		if (StringHelper.longuestWord(str1).toLowerCase() == StringHelper.longuestWord(str2).toLowerCase())
		{
			return true;
		}
		else
		{
			return false;
		}

	}

	StringHelper.longuestWord = function(str)
	{
		var parts = str.split(" ");
		var longuest = "";
		longuest.length = -1;
		for (var i = 0; i < parts.length; i++)
		{
			if (parts[i].length > longuest.length)
			{
				longuest = parts[i];

			}
		}

		return longuest;
	}

	return StringHelper;
})